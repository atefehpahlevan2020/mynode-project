const User = require('app/models/user');
const middleware = require('./middleware');

class redirectIfNotAuthenticated extends middleware {

    handle(req,res,next) {
        if(req.isAuthenticated())   
        return next();

        return res.redirect('/auth/login')
    }
}
module.exports = new redirectIfNotAuthenticated();
