const DudaWorker = require('./Duda');
const Mailer = require('./Mailer');
const Sites = require('./Models/Sites');
const { getDataWithCache } = require('./functions');

require('dotenv').config();
const {
    STRIPE_SECRET_KEY,
    TEST_MODE
} = process.env;

const stripe = require('stripe')(STRIPE_SECRET_KEY);
class Webhooks {

    static async completed(customer, credentials, { siteId, subscriptionType, includePlus }) {
        try {
            const subscriptions = (await stripe.subscriptions.list({ customer })).data;
            let product = false;
            let subscription = false;

            if (Array.isArray(subscriptions) && subscriptions.length > 0) {
                subscription = subscriptions.pop();
                product = subscription.plan.product;
            }

            let price = (await getDataWithCache('price', async () => (await Promise.all(
                (await stripe.prices.list({ type: 'recurring', active: true })).data
                    .map(async item => {
                        const p = (await stripe.products.retrieve(item.product));
                        item.productStatus = p.active;
                        item.name = p.name;
                        return item;
                    }))).filter(item => item.productStatus)
            )).find(p => p.product == product);

            const amount = price.unit_amount / 100;
            const plan = price.name;
            const date = new Date().toISOString().slice(0, 19).replace('T', ' ');

            const siteInfo = await Sites.findOneAndUpdate({
                _id: siteId
            }, {
                stripeCustomer: customer,
                subscriptionType: subscriptionType || 'lite',
                includePlus: includePlus === 'true'
            });

            if (!siteInfo) throw new Error("Undefind siteId: " + siteId);

            if (TEST_MODE == 'false') {
                await DudaWorker.publishSite(siteInfo.siteName);
            }

            const site = await DudaWorker.getAccountBySite(siteInfo.siteName);

            const mailer = new Mailer();
            await mailer.receipt(credentials.email, {
                name: credentials.name,
                plan: `${plan}${includePlus === 'true' ? ' Plus' : ''}`,
                amount,
                date,
                link: site.site_default_domain || site.site_domain
            });

            mailer.notifyAdminSubscription({
                email: credentials.email,
                name: credentials.name || credentials.email,
                plan: `${plan}${includePlus === 'true' ? ' Plus' : ''}`,
                amount,
                siteName: siteInfo.siteName,
                domain: site.site_default_domain || site.site_domain
            }).catch(() => { });
        } catch (e) {
            console.error(e);
        }
    }

    static async notificationExpire(customer, credentials, { siteId }) {
        try {
            let email = credentials?.email;
            let name = credentials?.name;
            if (!email && customer) {
                const cust = await stripe.customers.retrieve(customer).catch(() => null);
                if (cust && !cust.deleted) {
                    email = cust.email;
                    name = cust.name || cust.email;
                }
            }

            const siteInfo = await Sites.findById(siteId);
            const site = await DudaWorker.getAccountBySite(siteInfo.siteName);
            const domain = site?.site_default_domain || site?.site_domain;

            const mailer = new Mailer();
            if (email) await mailer.expireNotify(email, name || email, domain);

            mailer.notifyAdminExpired({
                email: email || '',
                name: name || 'N/A',
                siteName: siteInfo?.siteName || '',
                domain
            }).catch(() => { });
        } catch (e) {
            console.error(e);
        }
    }

    static async cancel(customer, credentials, { siteId }) {
        try {
            let email = credentials?.email;
            let name = credentials?.name;
            if (!email && customer) {
                const cust = await stripe.customers.retrieve(customer).catch(() => null);
                if (cust && !cust.deleted) {
                    email = cust.email;
                    name = cust.name || cust.email;
                }
            }

            const siteInfo = await Sites.findById(siteId);
            if (siteInfo) {
                const site = await DudaWorker.getAccountBySite(siteInfo.siteName);

                await DudaWorker.removePermisions(site.site_name);

                const mailer = new Mailer();
                const domain = site?.site_default_domain || site?.site_domain;
                if (email) await mailer.cancelNotify(email, name || email, domain);
            } else {
                console.error("Undefind siteId: " + siteId);
            }
        } catch (e) {
            console.error(e);
        }
    }
}

module.exports = Webhooks;
