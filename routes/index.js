'use strict';

const {error404} = require('../controllers/errors');
const {create, item} = require('../controllers/users');

const isAuthenticated = function (req, res, next) {
    // If user is authenticated in the session, call the next() to call the next request handler
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects
    if (req.isAuthenticated()) {
        return next();
    }
    // If the user is not authenticated then redirect him to the login page
    res.redirect('/login');
};

module.exports = (app, passport) => {
    app.get('/', isAuthenticated, function (req, res) {
        console.log(req.user);
    });

    app.post('/login', passport.authenticate('local', { successRedirect: '/',
        failureRedirect: '/login' }));

    app.post('/users', create);

    app.get('/users/:id', item);

    app.all('*', error404);
};


// 'use strict';
//
// const {error404} = require('../controllers/errors');
// const {create, item} = require('../controllers/users');
//
// const isAuthenticated = function (req, res, next) {
//     // If user is authenticated in the session, call the next() to call the next request handler
//     // Passport adds this method to request object. A middleware is allowed to add properties to
//     // request and response objects
//     if (req.isAuthenticated()) {
//         return next();
//     }
//     // If the user is not authenticated then redirect him to the login page
//     res.redirect('/login');
// };
//
// module.exports = (app, passport) => {
//     app.get('/', isAuthenticated, function (req, res) {
//         console.log(req.user);
//     });
//
//     app.get('/log', isAuthenticated, function (req, res) {
//         console.log(req.user);
//     });
//
//
//     app.all('*', error404);
// };
