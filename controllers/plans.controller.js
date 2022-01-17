
const Plans = require("../models/plan.model");
const mongoose = require("mongoose");
const createError = ("http-errors");


module.exports.list = (req, res, next) => {

    Plans.find()
        .then((plans) => {
            res.render("plans/list", { plans })
        })
        .catch((error) => {
            next(error)
        });
};


module.exports.detail = (req, res, next) => {
    Plans.findById(req.params.id)
        .then((plan) => {
            if (plan) {
                res.render("plans/detail", { plan })
            } else {
                next(createError(404, 'User not found'))
            }

        })
        .catch((error) => next(error))
}


// module.exports.detail = (req, res, next) => {
//     Plans.findById(req.params.id)
//         .then((plan) => {
//             res.render("plans/detail", { plan })
//         })
//         .catch((error) => next(error))
// }

