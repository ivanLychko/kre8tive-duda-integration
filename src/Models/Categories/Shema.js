const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const Categories = new Schema({
    name: String,
    templates: [Number],
}, { timestamps: true });

module.exports = mongoose.model('categories', Categories);
