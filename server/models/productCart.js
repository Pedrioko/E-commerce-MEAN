const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const schemaOptions = {
    autoCreate: true,
    timestamps: { createdAt: 'created', updatedAt: 'updated' },
}

const productCartSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        autopopulate: true
    },
    quantity: {
        type: Number,
        default: 0
    },

}, schemaOptions)

productCartSchema.plugin(require('mongoose-autopopulate'));

productCartSchema.plugin(mongoosePaginate);


module.exports = mongoose.model('ProductCart', productCartSchema)