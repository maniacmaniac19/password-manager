const express = require('express')
const router = express.Router();
const passport = require('passport');

router.get('/login', passport.authenticate('auth0',{
    scope: 'openid email profile'
}), function(req, res){
    res.redirect('/');
});

router.get('/callback', function(req, res, next){
    passport.authenticate('auth0', function(err, user, info){
        if (err) {return next(err);}
        if (!user) {return res.redirect('/login');}
        req.logIn(user, function (err){
            const returnTo = req.session.returnTo;
            delete req.session.returnTo;
            res.redirect(returnTo || '/user');
        });
    })(req, res, next);
});

router.get('/logout', (req, res) =>{
    req.logout();
    res.redirect('/');
});

module.exports = router;