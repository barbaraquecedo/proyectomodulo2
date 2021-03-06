const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categories = require('../constants/interests')


const planSchema = new Schema({
    title: {
        type: String,
        require: [true, 'Title is required']
    },

    description: {
        type: String,
        require: [true, 'Description is required']
    },

    image: {
        type: String,
        //require: [true, 'An image is required']
        default: 'https://picsum.photos/300/?blur'
    },

    interests: {
        type: [String],
        enum: categories
    },

    rating: {
        type: Number
    },

    location: {
        type: String,
        require: [true]
    },

    price: {
        type: Number,
        require: [true, 'Price tag is required']
    },

    date: {
        type: String,
        require: [true, 'A date is required']
    },


    time: {
        type: String,
        require: [true, 'A time is required']
    },

    verifiedPay: {
        type: Boolean,
        default: false,
      },
    



}, { timestamps: true })


const Plan = mongoose.model('Plan', planSchema);
module.exports = Plan;