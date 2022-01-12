const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const PASSWORD_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const EMAIL_PATTERN = /.{8,}/;

const interests = ["forest", "branch", "cinema"]

const userSchema = new Schema ( {
    name: {
        type: String,
        require: [true, "Name is required"],
    },
    
    surname: {
        type: String,
        require: [true, "surname is required"]
    },

    email:{
        type: String,
        require: [true, "email is reuquired"],
        match: [EMAIL_PATTERN,  "email is not valid"],
        trim: true,
        lowercase: true,
        unique: true
    },

    password:{
        type: String,
        require: true,
        trim: true,
        match: [PASSWORD_PATTERN, "password needs at least 8 characters"]

    },

    avatarUrl:{
        type: String,
        default:"https://i.pravatar.cc/300",
    },

    interests:{
        type: [String],
        enum: interests
    },

    liked: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plan'
    }]


}, {timestamps:true})




const User = mongoose.model("User", userSchema);
module.exports = User;