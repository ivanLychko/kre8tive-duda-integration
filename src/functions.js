const { createHash } = require('crypto');
const fs = require('fs');
const path = require('path');
const stripeProducts = require('./stripeProducts.json');

function hash(str) {
    return createHash('sha256').update(str).digest('hex');
}

async function getDataWithCache(cacheFilePath, fnData = () => [], timeMinutes = 60) {
    const time = timeMinutes * 60 * 1000;

    const fullPath = path.join(__dirname, './cache/', cacheFilePath + '.json');

    if (fs.existsSync(fullPath)) {
        const { data, date } = JSON.parse(fs.readFileSync(fullPath));
        if ((+date + time) > Date.now()) return data;
    }

    const data = await fnData();
    if (!data) return false;

    const date = Date.now();

    fs.writeFileSync(fullPath, JSON.stringify({ data, date }));

    return data;
}

/**
 * Определяет тип подписки на основе настроек сайта в Duda
 * @param {Object} siteInfo - информация о сайте из Duda API
 * @returns {Object} - объект с типом подписки и дополнительными опциями
 */
function determineSubscriptionType(siteInfo) {
    // По умолчанию используем lite/standard
    let subscriptionType = 'lite';
    let hasPlus = false;

    // Логика определения типа подписки на основе настроек сайта
    if (siteInfo.store_status === 'ACTIVE') {
        // Если есть магазин, используем lite как базовый план для e-commerce
        subscriptionType = 'lite'; // Standard e-commerce plan

        // В будущем здесь можно добавить логику для определения pro/infinity
        // на основе дополнительных функций сайта
    } else {
        // Для сайтов без магазина используем базовый план (все флаги false)
        subscriptionType = 'basic';
    }

    return {
        type: subscriptionType,
        hasPlus: hasPlus,
        hasShop: siteInfo.store_status === 'ACTIVE'
    };
}

/**
 * Получает доступные продукты для пользователя на основе типа подписки
 * @param {Object} subscriptionInfo - информация о типе подписки
 * @param {boolean} includePlus - включать ли Plus опции
 * @returns {Array} - массив доступных продуктов
 */
function getAvailableProducts(subscriptionInfo, includePlus = false) {
    const { type, hasShop } = subscriptionInfo;

    return stripeProducts.filter(product => {
        // Для базовых планов (без e-commerce) - все флаги false
        if (type === 'basic' || !hasShop) {
            const isBasicPlan = !product.infinity && !product.pro && !product.lite && !product.shop;
            const plusMatch = includePlus ? product.plus === true : product.plus === false;
            return isBasicPlan && plusMatch;
        }

        // Для планов с e-commerce
        // Проверяем соответствие типу подписки
        const typeMatch = product[type] === true;

        // Проверяем наличие магазина
        const shopMatch = product.shop === true;

        // Проверяем Plus опцию
        const plusMatch = includePlus ? product.plus === true : product.plus === false;

        return typeMatch && shopMatch && plusMatch;
    });
}

/**
 * Получает все активные цены из Stripe
 * @param {string} cacheKey - ключ для кеширования
 * @returns {Array} - массив цен с информацией о продуктах
 */
async function getStripePrices(cacheKey = 'stripe_prices') {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    return await getDataWithCache(cacheKey, async () => (await Promise.all(
        (await stripe.prices.list({ type: 'recurring', active: true, limit: 100 })).data
            .map(async item => {
                const product = (await stripe.products.retrieve(item.product));
                item.productStatus = product.active;
                item.name = product.name;
                return item;
            }))).filter(item => item.productStatus)
    );
}

module.exports = {
    hash,
    getDataWithCache,
    determineSubscriptionType,
    getAvailableProducts,
    getStripePrices
};
