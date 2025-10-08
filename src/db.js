const mongoose = require('mongoose');

require('dotenv').config();

const { DB_PORT, DB_HOST, DB_PASSWORD, DB_USER, DB_NAME } = process.env;

const db = mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}`, {
    dbName: DB_NAME,
    pass: DB_PASSWORD ?? undefined,
    user: DB_USER ?? undefined,
})
    .then(() => console.log('Connected Database!'))
    .catch(console.error);


module.exports = db;
