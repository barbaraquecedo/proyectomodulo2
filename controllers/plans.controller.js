const Plan = require("../models/plan.model");
const mongoose = require("mongoose");
const createError = require("http-errors");
const User = require("../models/user.model");
const interests = require("../constants/interests")

const {sendVerificationEmail } = require("../config/mailer.config");



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
                res.render("plans/detail", { plan})
            } else {
                next(createError(404, 'User not found'))
            }

        })
        .catch((error) => next(error))
}

module.exports.pay = (req, res, next) => {
    res.render("plans/pays")
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
                                    if: { $in: [plan.id, "$likes"] },
                                    then: { $setDifference: ["$likes", [plan.id]] },
                                    else: { $concatArrays: ["$likes", [plan.id]] },
                                }

                            }
                        }
                    }],
                    { runValidators: true, new: true }
                )
                    .then(user => {
                        console.log(user)
                        res.redirect("/")
                    })

            }
        })
        .catch(error => next(error))
}

module.exports.doPay = (req, res, next) => {
    Plan.findById(req.params.id)
        .then(plan => {
            if (!plan) {
                next(createError(404, 'Plan not found'))
            } else {
                return User.findByIdAndUpdate(
                    req.user.id,
                    [{
                        $set: {
                            pays: {
                                $cond: {
                                    if: { $in: [plan.id, "$pays"] },
                                    then: { $setDifference: ["$pays", [plan.id]] },
                                    else: { $concatArrays: ["$pays", [plan.id]] }
                                }
                            }
                        }
                    }],
                    { runValidators: true, new: true }
                    ).then(user => {
                        res.redirect("/users/profile")
                    })
            }
        })
        .catch(error => next(error))
}

module.exports.create = (req, res, next) => {
    res.render("plans/create", {
        interests: interests
    })
};

module.exports.doCreate = (req, res, next) => {
    Plan.create(req.body)
        .then(() => res.redirect('/'))
        .catch((error) => {
            if (error instanceof mongoose.Error.ValidationError) {
                res.render('plans/create', {
                    plan: req.body,
                    errors: error.errors
                })
            } else {
                next(error)
            }
        })
}

module.exports.verify= (req, res, next) => {
    Plan.findByIdAndUpdate(req.params.id, { emailPay: true})
    .then((plan) =>{
        res.redirect("/")
    })
    .catch(next)
}