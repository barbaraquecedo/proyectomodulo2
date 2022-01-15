const createError = require("http-errors");
const User = require("../models/user.model");
const mongoose = require("mongoose");
//const { sendVerificationEmail } = require("./mailer.config");



module.exports.register = (req, res, next) => {
    res.render('auth/register')
}

module.exports.doRegister = (req, res, next) => {
    function renderWithErrors(errors) {
        res.render("auth/register", {
            errors: errors,
            user: req.body
        })
    }

    User.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) {
                console.log('entro en then del find', req.body)
                return User.create(req.body)
                    .then(() => {
                        console.log('entro en then de create')
                        res.redirect("/login")
                    })
            } else {
                renderWithErrors({ email: "email already exists" })
            }
        })
        .catch((error) => {
            console.log('entro en catch', error)
            if (error instanceof mongoose.Error.ValidationError) {
                console.log(error)
                renderWithErrors(error.errors)
            } else {
                next(error)
            }
        })
}

module.exports.login = (req, res, next) => {
    res.render('auth/login')
};


module.exports.doLogin = (req, res, next) => {
    function renderWithErrors(errors) {
        res.render("auth/login", {
            errors: errors,
            user: req.body
        })
    }
    const { email, password} = req.body
    User.findOne({email})
    .then((user) => {
        if(!user){
            renderWithErrors()
        }else{
            return user.checkPassword(password)
                .then(match => {
                    if(!match){
                        renderWithErrors()
                    }else{
                        req.session.userId = user.id
                        res.redirect("/")
                    }
                })
        }
    })
    .catch(error => next(error))
}