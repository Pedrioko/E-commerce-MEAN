const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const schemaOptions = {
    autoCreate: true,
    timestamps: { createdAt: 'created', updatedAt: 'updated' },
}

const shipingSchema = new mongoose.Schema({
    carrie: {
        type: String,
        required: true,
    },
    tracking: {
        type: String,
        required: true,
    }

}, schemaOptions)

shipingSchema.plugin(require('mongoose-autopopulate'));

shipingSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Shipping', shipingSchema)