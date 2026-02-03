const express = require('express');
const { hash, getDataWithCache, determineSubscriptionType, getAvailableProducts, getStripePrices } = require('../functions');
const DudaWorker = require('../Duda');
const cors = require('cors');
const Sites = require('../Models/Sites');
const Categories = require('../Models/Categories');
const Mailer = require('../Mailer');
const router = express.Router();

require('dotenv').config();
const {
  STRIPE_SECRET_KEY,
  URL_MARKET,
  YOUR_DOMAIN,
  CHECKOUT_SESSION_SOLT,
  DUDA_DOMAIN,
  TEST_MODE
} = process.env;
const stripe = require('stripe')(STRIPE_SECRET_KEY);

const corsOption = {
  origin: ['https://www.viib.ca', 'https://viib.ca'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}

router.get('/', async function (req, res, next) {
  if (!req.query.template_id) {
    res.redirect(URL_MARKET);
    return;
  }
});

router.options('/create-account', cors(corsOption));
router.post('/create-account', cors(corsOption), async function (req, res, next) {
  try {
    const data = req.body;

    const site = await DudaWorker.createSite(data.tplId);

    let account = await DudaWorker.getAccountByEmail(data.email);
    let link = false;

    if (!account) {
      account = await DudaWorker.createAccount({ email: data.email, name: data.name });
      link = await DudaWorker.genAuthLink(account);
    }

    await DudaWorker.updatePermisions(account, site);

    const mailer = new Mailer();
    if (link) {
      await mailer.newSiteWithAuthLink(data.email, data.name, link);
    } else {
      await mailer.newSite(data.email, data.name);
    }

    mailer.notifyAdminNewSite({
      email: data.email,
      name: data.name,
      siteName: site
    }).catch(() => { });

    res.json({ success: 'ok' });

  } catch (e) {
    res.json({ error: e });
  }
});

router.get('/success', function (req, res, next) {
  res.render('success');
});

router.get('/list-templates', cors(corsOption), async function (req, res, next) {
  res.json(await getDataWithCache('templates', async () => DudaWorker.getAllTemplates(['flex'])));
});

router.get('/list-categories', cors(corsOption), async function (req, res, next) {
  res.json(await Categories.find({}).sort({ createdAt: -1 }));
});

router.get('/get-available-products', cors(corsOption), async function (req, res, next) {
  try {
    const { sitename, includePlus = 'false' } = req.query;

    if (!sitename) {
      return res.status(400).json({ error: 'Site name is required' });
    }

    // Получаем информацию о сайте
    const siteInfo = await DudaWorker.getSite(sitename);
    const subscriptionInfo = determineSubscriptionType(siteInfo);

    // Получаем доступные продукты
    const availableProducts = getAvailableProducts(subscriptionInfo, includePlus === 'true');

    // Получаем цены из Stripe
    let prices = await getStripePrices(`price`);

    // Фильтруем цены по доступным продуктам
    const filteredPrices = prices.filter(price =>
      availableProducts.some(product => product.id === price.product)
    );

    // Разделяем на месячные и годовые
    const monthlyPrices = filteredPrices.filter(price => price.recurring.interval === 'month');
    const yearlyPrices = filteredPrices.filter(price => price.recurring.interval === 'year');

    res.json({
      subscriptionInfo,
      monthlyPrices,
      yearlyPrices,
      availableProducts
    });
  } catch (error) {
    console.error('Error getting available products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/cancel', function (req, res, next) {
  res.render('cancel');
});

router.post('/create-checkout-session', async function (req, res) {
  const { productId, siteName, includePlus } = req.body;

  // Получаем информацию о сайте
  const siteInfo = await DudaWorker.getSite(siteName);
  const subscriptionInfo = determineSubscriptionType(siteInfo);

  // Получаем доступные продукты с учетом Plus опции
  const availableProducts = getAvailableProducts(subscriptionInfo, includePlus === 'true');

  // Находим выбранный продукт
  const selectedProduct = availableProducts.find(p => p.id === productId);
  if (!selectedProduct) {
    return res.status(400).json({ error: 'Invalid product selected' });
  }

  // Получаем цену из Stripe
  const prices = await stripe.prices.list({
    product: productId
  });

  if (!prices.data.length) {
    return res.status(400).json({ error: 'No prices found for selected product' });
  }

  let newSite = await Sites.findOne({ siteName: siteName }).exec();
  if (!newSite) {
    newSite = await Sites.create({ siteName: siteName });
  }

  const session = await stripe.checkout.sessions.create({
    billing_address_collection: 'auto',
    metadata: {
      siteId: newSite._id.toString(),
      subscriptionType: subscriptionInfo.type,
      includePlus: includePlus === 'true' ? 'true' : 'false'
    },
    line_items: [
      {
        price: prices.data[0].id,
        quantity: 1
      },
    ],
    mode: 'subscription',
    success_url: `${DUDA_DOMAIN}/home/site/${siteName}/home`,
    cancel_url: `${DUDA_DOMAIN}/home/site/${siteName}/home`,
    ui_mode: 'hosted', // Открывает в новой вкладке
  });

  res.redirect(303, session.url);
});

router.post('/update-plan', async function (req, res) {
  if (!req.body.sitename) {
    return res.end('error');
  }

  const siteRecord = await Sites.findOne({ siteName: req.body.sitename }).exec();

  let needsPay = true;

  if (siteRecord && siteRecord.stripeCustomer) {
    needsPay = false;
    const subscriptions = (await stripe.subscriptions.list({ customer: siteRecord.stripeCustomer })).data;

    let product = false;
    let subscription = false;

    if (Array.isArray(subscriptions) && subscriptions.length > 0) {
      subscription = subscriptions.pop();
      product = subscription.plan.product;
    }

    if (product) {
      const siteInfo = await DudaWorker.getSite(req.body.sitename);

      if (
        (siteInfo.store_status == 'ACTIVE' && product == STRIPE_PRODUCT_SIMPLE) ||
        ((!siteInfo.store_status || siteInfo.store_status != 'ACTIVE') && product == STRIPE_PRODUCT_STORE)
      ) {
        let newProduct = product == STRIPE_PRODUCT_SIMPLE ? STRIPE_PRODUCT_STORE : STRIPE_PRODUCT_SIMPLE;

        let prices = await getStripePrices('price');

        const newPriceId = prices.find(p => p.product == newProduct).id;

        await stripe.subscriptions.update(subscription.id, {
          items: [{
            id: subscription.items.data[0].id,
            price: newPriceId,
          }],
        });

        if (TEST_MODE == 'false') {
          await DudaWorker.publishSite(siteInfo.siteName);
        }

        return res.end('success');
      }
    }
  }

  return res.end('error');
});

router.get('/publish', cors(), async function (req, res) {
  if (!req.query.sitename) {
    res.redirect(URL_MARKET);
    return;
  }

  const siteRecord = await Sites.findOne({ siteName: req.query.sitename }).exec();

  let needsPay = true;

  if (siteRecord && siteRecord.stripeCustomer) {
    needsPay = false;
    const subscriptions = (await stripe.subscriptions.list({ customer: siteRecord.stripeCustomer })).data;

    let product = false;

    if (Array.isArray(subscriptions) && subscriptions.length > 0) {
      const subscription = subscriptions.pop();
      product = subscription.plan.product
    }

    if (product) {
      const siteInfo = await DudaWorker.getSite(req.query.sitename);
      let textPlanInfo = '';

      if (
        (siteInfo.store_status == 'ACTIVE' && product == STRIPE_PRODUCT_STORE) ||
        ((!siteInfo.store_status || siteInfo.store_status != 'ACTIVE') && product == STRIPE_PRODUCT_SIMPLE)
      ) {
        needsPay = false;
      } else {
        if (product == STRIPE_PRODUCT_STORE) {
          textPlanInfo = 'You have removed a store to your site. You are switching to a business plan!';
        } else {
          textPlanInfo = 'You have added a store to your site. You`re upgrading to an e-commerce plan!';
        }

        let prices = await getStripePrices('price_update');

        const siteInfo = await DudaWorker.getSite(req.query.sitename);

        let priceFrom = false;
        let priceTo = false;

        if (siteInfo.store_status == 'ACTIVE') {
          priceFrom = prices.find(p => p.product == STRIPE_PRODUCT_SIMPLE);
          priceTo = prices.find(p => p.product == STRIPE_PRODUCT_STORE);
        } else {
          priceFrom = prices.find(p => p.product == STRIPE_PRODUCT_STORE);
          priceTo = prices.find(p => p.product == STRIPE_PRODUCT_SIMPLE);
        }

        return res.render('updateSubscription', {
          text: textPlanInfo,
          priceFrom,
          priceTo,
          sitename: req.query.sitename,
          domain: siteInfo.site_default_domain
        });
      }
    }
  }

  if (needsPay) {
    const sessionId = hash(CHECKOUT_SESSION_SOLT + Date.now() + Math.random());

    // Получаем информацию о сайте из Duda
    const siteInfo = await DudaWorker.getSite(req.query.sitename);

    // Определяем тип подписки на основе настроек сайта
    const subscriptionInfo = determineSubscriptionType(siteInfo);

    // Получаем доступные продукты (без Plus по умолчанию для роута /publish)
    const availableProducts = getAvailableProducts(subscriptionInfo, false);

    // Получаем цены из Stripe
    let prices = await getStripePrices('price');


    // Фильтруем цены по доступным продуктам
    const filteredPrices2 = prices.filter(price =>
      availableProducts.some(product => product.id === price.product)
    );

    // Разделяем на месячные и годовые
    const monthlyPrices2 = filteredPrices2.filter(price => price.recurring.interval === 'month');
    const yearlyPrices2 = filteredPrices2.filter(price => price.recurring.interval === 'year');

    res.render('subscription-selection', {
      monthlyPrices: monthlyPrices2,
      yearlyPrices: yearlyPrices2,
      sessionId,
      sitename: req.query.sitename,
      subscriptionInfo,
      availableProducts
    });
  } else {
    if (TEST_MODE == 'false') {
      await DudaWorker.publishSite(siteInfo.siteName);
    }
    const siteInfo = await DudaWorker.getSite(req.query.sitename);

    return res.render('publish', { domain: siteInfo.site_default_domain });
  }

});

router.post('/create-portal-session', async (req, res) => {

  const { sessionId } = req.body;
  const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId);

  const returnUrl = YOUR_DOMAIN;

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: checkoutSession.customer,
    return_url: returnUrl,
  });

  res.redirect(303, portalSession.url);
});

module.exports = router;
