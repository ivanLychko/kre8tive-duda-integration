const DudaWorker = require("../Duda");
const express = require('express');
const { getDataWithCache } = require("../functions");
const router = express.Router();
const ModelCategory = require('../Models/Categories');

router.get('/', async function (req, res, next) {
    const templates = await getDataWithCache('templates', async () => DudaWorker.getAllTemplates(['flex']));
    const categories = await ModelCategory.find({}).sort({ createdAt: -1 });

    const data = { templates, categories };

    res.render('categoriesEditor', data);
});

router.post('/create-category', async function (req, res, next) {
    const data = await ModelCategory.create({
        name: req.body.name
    });

    res.json({
        status: 200,
        data
    });
});

router.post('/add-tpl-to-category', async function (req, res, next) {
    const { categoryId, tplId } = req.body;

    const category = await ModelCategory.findById(categoryId);

    if (category.templates.indexOf(tplId) == -1) {
        category.templates.push(tplId);

        await ModelCategory.findByIdAndUpdate(categoryId, category);

        return res.json({ status: 200 });
    }

    res.json({ status: 400 });
});

router.post('/remove-tpl-from-category', async function (req, res, next) {
    const { categoryId, tplId } = req.body;

    const category = await ModelCategory.findById(categoryId);
    if (category.templates.indexOf(tplId) > -1) {

        category.templates.splice(category.templates.indexOf(tplId), 1);
        await ModelCategory.findByIdAndUpdate(categoryId, category);

        return res.json({ status: 200 });
    }

    res.json({ status: 400 });
});

router.post('/remove-category', async function (req, res, next) {
    await ModelCategory.findByIdAndDelete(req.body.id);
    res.end('OK');
});

module.exports = router;
