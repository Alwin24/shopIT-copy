const Product = require('../models/product');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const products = require('../data/products.json');
const { connect } = require('mongoose');

dotenv.config({ path: 'backend/config/config.env' });

connectDatabase();

const seedProducts = async () => {
    try {
        await Product.deleteMany();
        console.log('All products have been deleted.');
        await Product.insertMany(products);
        console.log('Products have been added.');
        process.exit();
    }
    catch (error) {
        console.log(error.message, 'hello');
        process.exit();
    }
}

seedProducts();