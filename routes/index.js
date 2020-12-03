// require our modules express, 
const express = require('express');
// create our router object

const router = express.Router();
// TODO: require index controller
const passport = require('passport');
const indexCtrl = require('../controllers/index');


router.get('/auth/google', passport.authenticate(
    'google', {
        scope: ['profile', 'email']
    }
));

router.get('/oauth2callback', passport.authenticate(
    'google', {
        successRedirect: '/workouts',
        failureRedirect: '/'
    }
));

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/', indexCtrl.index);

module.exports = router;