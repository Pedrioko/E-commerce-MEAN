const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const schemaOptions = {
    autoCreate: true,
    timestamps: { createdAt: 'created', updatedAt: 'updated' },
}

const categorieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: String,
    imagenes: [String]
}, schemaOptions)

categorieSchema.plugin(require('mongoose-autopopulate'));

categorieSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Categorie', categorieSchema)