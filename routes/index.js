'use strict';

const {error404} = require('../controllers/errors');
const {user_item} = require('../controllers/users');

module.exports = app => {
    app.get('/', function (req, res) {
        res.render('index', {...res.locals});
    });

    app.get('/users/:id', user_item);

    app.all('*', error404);
};
