const express = require('express');

const bodyParser = require('body-parser');

const product = require('./routes/product');

const app = express();

const mongoose = require('mongoose');

let dev_db_url = 'mongodb://matheus:i0n4d34d@ds145911.mlab.com:45911/productstest';

const mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use('/products', product);

let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
