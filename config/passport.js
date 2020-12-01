const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const User = require('../models/user');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
}, function(accessToken, refreshToken, profile, done) {
    User.findOne({ googleId: profile.id }, function(err, foundUser) {
        if(err) return done(err);
        if(foundUser) {
            return done(null, foundUser);
        } else {
            const newUser = new User({
                displayName: profile.displayName,
                email: profile.email,
                googleId: profile.id,
                avatarURL: profile.avatarURL
            });
            newUser.save(function(err) {
                if(err) return done(err);
                return done(null, newUser);
            });
        }
    });
}));



passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});