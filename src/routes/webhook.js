const express = require('express');
const Webhooks = require('../Webhooks');
const router = express.Router();

require('dotenv').config();
const { STRIPE_SECRET_KEY, ENDPOINT_SECRET } = process.env;
const stripe = require('stripe')(STRIPE_SECRET_KEY);

router.post('/', express.raw({ type: 'application/json' }), (request, response) => {
    let event;

    const endpointSecret = ENDPOINT_SECRET;

    if (endpointSecret) {
        const signature = request.headers['stripe-signature'];
        try {
            event = stripe.webhooks.constructEvent(
                request.body,
                signature,
                endpointSecret
            );
        } catch (err) {
            console.log(`⚠️  Webhook signature verification failed.`, err.message);
            return response.sendStatus(400);
        }
    }

    const reqBody = JSON.parse(request.body.toString());
    
    switch (event.type) {

        case 'checkout.session.completed':
            Webhooks.completed(
                reqBody.data.object.customer,
                reqBody.data.object.customer_details,
                reqBody.data.object.metadata
            );
            break;
        case 'subscription_schedule.canceled':
        case 'customer.subscription.deleted':
            Webhooks.cancel(
                reqBody.data.object.customer,
                reqBody.data.object.customer_details,
                reqBody.data.object.metadata
            );
            break;
        case 'subscription_schedule.expiring':
            Webhooks.notificationExpire(
                reqBody.data.object.customer,
                reqBody.data.object.customer_details,
                reqBody.data.object.metadata
            );
            break;
        default:
            console.log('not catche - ' + event.type + "\n");
            response.sendStatus(400);
            return;
    }

    response.sendStatus(200);
});

module.exports = router;
