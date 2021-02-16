const address = require('./address');
const admin = require('./admin');
const cart = require('./cart');
const categorie = require('./categorie');
const order = require('./order');
const product = require('./product');
const productcart = require('./productCart');
const shipping = require('./shipping');
const tag = require('./tag');
const user = require('./user');

const models = {
    address,
    admin,
    cart,
    categorie,
    order,
    product,
    productcart,
    shipping,
    tag,
    user
}


module.exports = models;