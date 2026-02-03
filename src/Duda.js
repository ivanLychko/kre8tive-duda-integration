const { Duda } = require('@dudadev/partner-api');
const dudeADocs = require('@api/dude-a-docs');
const { hash } = require('./functions');
require('dotenv').config();
const { API_USER, API_PASSWORD } = process.env;

const duda = new Duda({
    user: API_USER,
    pass: API_PASSWORD
});

class DudaWorker {

    static async getTemplateById(id) {
        const response = await duda.templates.get({ template_id: id })
            .catch((err) => console.error(err));

        return response;
    }

    static async getSite(sitename) {
        return await duda.sites.get({ site_name: sitename })
            .catch(console.error);
    }

    static async getAllTemplates(filterNameExeption = []) {
        const response = await duda.templates.list()
            .catch((err) => console.error(err));

        return response.filter(tpl => !filterNameExeption.some(exeption => tpl.template_name.toLowerCase().indexOf(exeption.toLowerCase()) > -1));
    }

    static async createSite(tplId) {
        const response = await duda.sites.create({
            template_id: tplId
        })
            .catch((err) => console.error(err));

        return response.site_name;

    }

    static async getAccountByEmail(email) {
        const res = await duda.accounts.get({ account_name: email })
            .catch((err) => {
                const code = err?.error?.error_code ?? err?.error_code;
                if (code !== 'ResourceNotExist') {
                    console.error(err);
                }
                return null;
            });

        return res ? res.account_name : false;
    }

    static async getAccountBySite(site) {
        const res = await duda.sites.get({ site_name: site })
            .catch((err) => console.error(err));

        return res;
    }

    static async createAccount({ name, email }) {

        await duda.accounts.create({
            account_name: email,
            first_name: name.split(' ')[0],
            last_name: name.indexOf(' ') > -1 ? name.split(' ')[1] : '',
            email
        })
            .catch((err) => console.error(err));

        return email;

    }

    static async genAuthLink(account_name) {
        const response = await duda.accounts.authentication.getWelcomeLink({
            account_name
        }).catch((err) => console.error(err));

        return response.welcome_url;
    }

    static async publishSite(site_name) {
        return await duda.sites.publish({
            site_name: site_name
        }).catch((err) => console.error(err))
    }

    static async removePermisions(siteName) {
        const site = await DudaWorker.getAccountBySite(siteName);

        await duda.accounts.permissions.removeSiteAccess({
            account_name: site.account_name,
            site_name: siteName,
        });
    }

    static async updatePermisions(userName, siteName) {

        const response = await duda.accounts.permissions.grantSiteAccess({
            account_name: userName,
            site_name: siteName,
            permissions: [
                "PUSH_NOTIFICATIONS",
                "REPUBLISH",
                "EDIT",
                'SITE_COMMENTS',
                'EDIT_CONNECTED_DATA',
                'MANAGE_CONNECTED_DATA',
                'BACKUPS',
                "ADD_FLEX",
                "INSITE",
                "PUBLISH",
                "CUSTOM_DOMAIN",
                "E_COMMERCE",
                "RESET",
                "SEO",
                'SEO_OVERVIEW',
                "STATS_TAB",
                "BLOG"
            ]
        })
            .catch((err) => console.error(err));

        return response;
    }
}

module.exports = DudaWorker;
