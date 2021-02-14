let mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const schemaOptions = {
    autoCreate: true,
    timestamps: { createdAt: 'created', updatedAt: 'updated' },
}

let tagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: String,
    imagenes: [String]
}, schemaOptions)

tagSchema.plugin(require('mongoose-autopopulate'));

tagSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Tag', tagSchema)