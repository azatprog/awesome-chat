'use strict';

const {error404} = require('../controllers/errors');
const users = require('../controllers/users');
const contacts = require('../controllers/contacts');
const chats = require('../controllers/chats');

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
        res.send(req.user);
    });

    app.post('/login',
        passport.authenticate('local'),
        function (req, res) {
            res.send(req.user);
        });

    app.get('/users', users.list);
    app.get('/users/:id', users.detail);
    app.get('/users/search/:username', users.search);
    app.post('/users', users.create);

    app.get('/contacts', contacts.list);
    app.post('/contacts', contacts.create);

    app.get('/chats', chats.list);
    app.post('/chats/add', chats.addParticipant);
    app.post('/chats', chats.create);

    app.all('*', error404);
};
