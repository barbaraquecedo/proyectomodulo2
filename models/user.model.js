const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs")




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
        type: mongoose.Schema.Types.ObjectId,
        ref: plans
    },


}, {timestamps:true})




const User = mongoose.model("User", userSchema);
module.exports = User;