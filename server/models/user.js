let mongoose = require('mongoose')
let validator = require('validator')
const mongoosePaginate = require('mongoose-paginate-v2');
const Bcrypt = require("bcryptjs");

const schemaOptions = {
    autoCreate: true,
    timestamps: { createdAt: 'created', updatedAt: 'updated' },
}

let userSchema = new mongoose.Schema({
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

userSchema.plugin(require('mongoose-autopopulate'));

userSchema.plugin(mongoosePaginate);

userSchema.pre("save", function(next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = Bcrypt.hashSync(this.password, 10);
    next();
});

userSchema.methods.comparePassword = async function(plaintext) {
    return await Bcrypt.compareSync(plaintext, this.password);
};

module.exports = mongoose.model('User', userSchema)