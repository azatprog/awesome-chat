'use strict';

const {error404} = require('../controllers/errors');
const users = require('../controllers/users');
const contacts = require('../controllers/contacts');

module.exports = app => {
    app.get('/', function (req, res) {
        res.render('index', {...res.locals});
    });

    app.get('/users', users.list);
    app.post('/users', users.create);
    app.get('/users/:id', users.detail);

    app.get('/contacts', contacts.list);
    app.post('/contacts', contacts.create);

    app.all('*', error404);
};
