
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

// Expose this function to our app using module.exports
module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

    passport.use('local-login', new LocalStrategy(
        function (username, password, done) {
            User.findOne({
                username: username.toLowerCase()
            }, function (err, user) {
                // If there are any errors, return the error before anything else
                if (err) {
                    return done(err);
                }

                // If no user is found, return the message
                if (!user) {
                    return done(null, false);
                }

                // If the user is found but the password is wrong
                if (!user.validPassword(password)) {
                    return done(null, false);
                }

                // All is well, return successful user
                return done(null, user);
            });
        }
    ));
};
