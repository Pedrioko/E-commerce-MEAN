const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const schemaOptions = {
    autoCreate: true,
    timestamps: { createdAt: 'created', updatedAt: 'updated' },
}

let orderSchema = new mongoose.Schema({
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
    }],
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
        autopopulate: true
    },
    payment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment',
        autopopulate: true
    },
    shipping: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shipping',
        autopopulate: true
    },
    total: {
        type: Number,
        default: 0
    }
}, schemaOptions)

orderSchema.plugin(require('mongoose-autopopulate'));

orderSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Order', orderSchema)