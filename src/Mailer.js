const nodemailer = require("nodemailer");
const ejs = require('ejs');
const path = require('path');

require('dotenv').config();
const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, FROM_EMAIL, ADMIN_EMAIL } = process.env;

const renderToString = (tpl, data) => {
    const filePath = path.join(__dirname, 'views', `mail/${tpl}.ejs`);
    return new Promise((resolve, reject) => {
        ejs.renderFile(filePath, data, {}, (err, str) => {
            if (err) return reject(err);
            resolve(str);
        });
    });
};
class Mailer {

    #transporter;

    constructor() {
        this.#transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            domain: "kre8tiveagency.com",
            secureConnection: false,
            port: SMTP_PORT,
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            }
        });
    }

    async sendByTpl(toEmail, subject, tpl, data) {
        try {
            const info = await this.#transporter.sendMail({
                from: FROM_EMAIL,
                to: toEmail,
                subject,
                html: (await renderToString(tpl, data)),
            });
            return info;
        } catch (e) {
            console.error(e);
        }
    }

    async expireNotify(toEmail, name, domain) {
        return this.sendByTpl(toEmail, "Your website will expire", "expire", { name, domain });
    }

    async cancelNotify(toEmail, name, domain) {
        return this.sendByTpl(toEmail, "Your Subscription Has Been Cancelled", "cancelled", { name, domain });
    }

    async newSite(toEmail, name) {
        return this.sendByTpl(toEmail, "Ready to Build Another Site?", "newSite", { name });
    }

    async receipt(toEmail, data) {
        return this.sendByTpl(toEmail, "Your Payment Receipt", "receipt", data);
    }

    async newSiteWithAuthLink(toEmail, name, link) {
        return this.sendByTpl(toEmail, "Welcome! Start Building Your Website", "newClient", { name, link });
    }

    async sendCustomMsg(to, from, subject, html) {
        try {
            const info = await this.#transporter.sendMail({
                from,
                to,
                subject,
                html
            });
            return info;
        } catch (e) {
            console.error(e);
        }
    }

    async notifyAdminNewSite(data) {
        if (!ADMIN_EMAIL) return;
        return this.sendByTpl(ADMIN_EMAIL, '[ViiB] Новый сайт создан', 'admin/newSite', data);
    }

    async notifyAdminSubscription(data) {
        if (!ADMIN_EMAIL) return;
        return this.sendByTpl(ADMIN_EMAIL, '[ViiB] Оформлена подписка', 'admin/subscription', data);
    }

    async notifyAdminExpired(data) {
        if (!ADMIN_EMAIL) return;
        return this.sendByTpl(ADMIN_EMAIL, '[ViiB] Истекла подписка', 'admin/expired', data);
    }
}

module.exports = Mailer;
