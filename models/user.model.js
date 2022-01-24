const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_PATTERN = /.{8,}/;
const SALT_WORK_FACTOR = 10;


const interests = ["forest", "branch", "cinema"]

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },

    administrator : {
        type: Boolean,
        default: false
    },

    surname: {
        type: String
        // required: [true, "surname is required"]
    },

    email: {
        type: String,
        required: [true, "email is reuquired"],
        match: [EMAIL_PATTERN, "email is not valid"],
        trim: true,
        lowercase: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        trim: true,
        match: [PASSWORD_PATTERN, "password needs at least 8 characters"]

    },

    avatarUrl: {
        type: String,
        default: "https://i.pravatar.cc/300",
    },

    interests: {
        type: [String],
        enum: interests
    },

    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plan'
    }]


}, { timestamps: true })


userSchema.pre('save', function (next) {
    const user = this;

    if (user.isModified('password')) {
        bcrypt.hash(user.password, SALT_WORK_FACTOR)
            .then(hash => {
                user.password = hash;
                next();
            })
            .catch(error => next(error))
    } else {
        next()
    }
})

userSchema.methods.checkPassword = function (passwordToCheck) {
    return bcrypt.compare(passwordToCheck, this.password)
}

const User = mongoose.model("User", userSchema);
module.exports = User;