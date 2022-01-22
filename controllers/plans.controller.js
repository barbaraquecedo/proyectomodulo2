const Plan = require("../models/plan.model");
const mongoose = require("mongoose");
const createError = require("http-errors");
const User = require("../models/user.model");


module.exports.admin = (req, res, next) => {
    res.send('solo los administradores tienen acceso')
};

module.exports.list = (req, res, next) => {

    Plan.find()
        .then((plans) => {
            res.render("misc/home", { plans })
        })
        .catch((error) => {
            next(error)
        });
};


module.exports.detail = (req, res, next) => {
    Plan.findById(req.params.id)
        .then((plan) => {
            if (plan) {
                res.render("plans/detail", { plan })
            } else {
                next(createError(404, 'User not found'))
            }

        })
        .catch((error) => next(error))
}


module.exports.doLike = (req, res, next) => {
    Plan.findById(req.params.id)
        .then(plan => {
            if (!plan) {
                next(createError(404, 'Plan not found'))
            } else {
                return User.findByIdAndUpdate(
                    req.user.id, 
                    [{ 
                        $set: { 
                            likes: {
                                $cond: { 
                                    if: { $in: [plan.id, "$likes"]},
                                    then: { $setDifference: ["$likes", [plan.id]]},
                                    else: { $concatArrays: ["$likes", [plan.id]]},
                                }

                            }
                        }
                    }], 
                    { runValidators: true,  new: true } 
                )
                .then(user => {
                    console.log(user)
                    res.redirect("/")
                })

            }
        })
        .catch(error => next(error))
}

