const models = require('../models');

module.exports = (app) => {
    console.log('Loading route');
    app.use('/api/categories', require('./crud')(models.categorie));


}