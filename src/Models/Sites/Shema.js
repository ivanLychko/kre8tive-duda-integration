const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const Sites = new Schema({
    siteName: String,
    stripeCustomer: String,
    subscriptionType: {
        type: String,
        default: 'lite'
    },
    includePlus: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('sites', Sites);
