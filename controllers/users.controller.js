const User = require('../models/user.model');
const mongoose = require('mongoose');
const createError = require('http-errors');



module.exports.admin = (req, res, next) => {
    res.send('solo los administradores tienen acceso')
};


module.exports.profile = (req, res, next) => {
    User.findById(req.user.id)
    .populate('likes')
    .populate('pays')
    .then((user) => {
        if (user) { 
            res.render('users/profile', {user})
        
        } else {
            next (createError, (404, 'User not found')) 
        }
    })
    .catch((error) => next (error))
}







