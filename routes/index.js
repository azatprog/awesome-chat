'use strict';

const {error404} = require('../controllers/errors');

module.exports = app => {
    app.get('/', function (req, res) {
        res.render('index', {...res.locals});
    });

    app.all('*', error404);
};

const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
  secret: 'unicorn_secret',
  userProperty: 'payload'
});

const ctrlProfile = require('../controllers/profile');
const ctrlAuth = require('../controllers/authentication');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;