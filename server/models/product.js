const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');
const fs = require('fs')

const schemaOptions = {
    autoCreate: true,
    timestamps: { createdAt: 'created', updatedAt: 'updated' },
}

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ""
    },
    mark: {
        type: String,
        required: true,
        default: ""
    },
    year: {
        type: String,
        default: ""
    },
    price: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        default: ""
    },
    cost: {
        type: Number,
        default: 0
    },
    quantity: {
        type: Number,
        default: 0
    },
    minQuantity: {
        type: Number,
        default: 0
    },
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag',
        autopopulate: true,
        default: []
    }],
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categorie',
        autopopulate: true,
        default: []
    }],
    images: [String]

}, schemaOptions)

productSchema.plugin(require('mongoose-autopopulate'));

productSchema.plugin(mongoosePaginate);
productSchema.pre("save", function(next) {
    if (this.name)
        this.name = this.name.trim();
    if (this.visualname)
        this.visualname = this.visualname.trim();
    if (this.description)
        this.description = this.description.trim();
    next();
});

productSchema.pre("delete", (next) => {
    if (this.images) {
        this.images.forEach(e => {
            try {
                fs.unlinkSync("./" + e)
            } catch (err) {
                console.error(err)
            }
        });
    }
    next();
});


module.exports = mongoose.model('Product', productSchema)