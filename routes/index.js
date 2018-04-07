'use strict';

const {error404} = require('../controllers/errors');

module.exports = (app, db) => {
    app.get('/', function (req, res) {
        res.render('index', {...res.locals});
    });

    app.all('*', error404);
};
