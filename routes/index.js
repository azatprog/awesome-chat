'use strict';

const {error404} = require('../controllers/errors');
const {create, item} = require('../controllers/users');

module.exports = app => {
    app.get('/', function (req, res) {
        res.render('index', {...res.locals});
    });

    app.post('/users', create);
    app.get('/users/:id', item);

    app.all('*', error404);
};
