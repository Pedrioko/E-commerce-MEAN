const mongoose = require('mongoose')
const validator = require('validator')
const mongoosePaginate = require('mongoose-paginate-v2');
const Bcrypt = require("bcryptjs");

const schemaOptions = {
    autoCreate: true,
    timestamps: { createdAt: 'created', updatedAt: 'updated' },
}

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: ""
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        default: ""
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
            return validator.isEmail(value)
        }
    },
    imageAvatar: {
        type: String,
        default: ""
    },
    status: {
        type: String,
        default: 'disable'
    }
}, schemaOptions)

adminSchema.plugin(require('mongoose-autopopulate'));

adminSchema.plugin(mongoosePaginate);

adminSchema.pre("save", function(next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = Bcrypt.hashSync(this.password, 10);
    next();
});

adminSchema.methods.comparePassword = async function(plaintext) {
    return await Bcrypt.compareSync(plaintext, this.password);
};

module.exports = mongoose.model('Admin', adminSchema)