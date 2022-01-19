const createError = require('http-errors')

module.exports.isAuthenticated = (req, res, next) => {
    if (req.user) {
        next()
    } else { 
        res.redirect('/login')
    }
} // middleware si estas autenticado

module.exports.isAdmin = (req, res, next) => {
    if (req.user.admin) {
        next()
    } else {
        next(createError(403, 'you are not an admin'))
    }
}
