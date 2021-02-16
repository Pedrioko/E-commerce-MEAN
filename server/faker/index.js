const faker = require('faker')
    //const { User, Address } = require('./schema')
require('../db');

const {
    address: Address,
    admin: Admin,
    cart: Cart,
    categorie: Categorie,
    order: Order,
    product: Product,
    productcart: Productcart,
    shipping: Shipping,
    tag: Tag,
    user: User
} = require('../models');


for (let i = 0; i < 10; i++) {
    const categorie = new Categorie({
        name: faker.commerce.productName(),
        image: faker.image.imageUrl()
    });

    await categorie.save().catch(e => console.log(e));

    const tag = new Tag({
        name: faker.commerce.productName(),
        image: faker.image.imageUrl()
    });

    await tag.save().catch(e => console.log(e));

}