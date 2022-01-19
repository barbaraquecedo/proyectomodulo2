const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categories = require('./../constants/categories')
console.log(categories)

const planSchema = new Schema ({
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
        default:'https://picsum.photos/300/?blur'
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
        require: [true, 'Location is required']
    },

    price: {
        type: Number,
        require: [true, 'Price tag is required']
    },

    date: {
        type: String,
        require: [true, 'A date is required']
    },

    // revisar
    time: {
        type: {
            hours: {
                type: Number,
                require: true
            },

            minutes: {
                type: Number,
                require: true
            }
        }

    }

}, { timestamps:true })


const Plan = mongoose.model('Plan', planSchema);
module.exports = Plan;