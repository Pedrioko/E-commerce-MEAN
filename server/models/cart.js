const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const schemaOptions = {
    autoCreate: true,
    timestamps: { createdAt: 'created', updatedAt: 'updated' },
}

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductCart',
        autopopulate: true,
        default: []
    }]
}, schemaOptions)

cartSchema.plugin(require('mongoose-autopopulate'));

cartSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Cart', cartSchema)