const interests = require("../constants/interests");
const Plans = require("../models/plan.model");

module.exports.home = (req, res, next) => {
    Plans.find()
        .then((plans) => {
            res.render("misc/home", { plans, interests: interests })
        })
        .catch((error) => {
            next(error)
        });
   
}