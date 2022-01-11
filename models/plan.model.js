const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interests = ["forest", "brunch", "cinema"];


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
        require: [true, 'An image is required']
    },

    interests: {
        type: [String],
        enum: interests
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