'use strict';

const path = require('path');
const join = path.join;

const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const pug = require('pug');
const morgan = require('morgan');

// MONGO stuff
const dbConfig = require('./config/db.js');
const mongoose = require('mongoose');

// Configuring Passport
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
require('./config/passport')(passport); // Pass passport for configuration
const expressSession = require('express-session');

const routes = require('./routes/index');
const commonData = require('./middlewares/common-data');

const app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

mongoose.connect(dbConfig.url);

app.use(expressSession({secret: 'mySecretKey'}));

app.use(passport.initialize());
app.use(passport.session());

const User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Подключаем шаблонизатор
app.set('view engine', 'pug');
// Подключаем директорию с шаблонами
app.set('views', join(__dirname, 'views'));

// Логируем запросы к приложению в debug-режиме
if (config.get('debug')) {
    app.use(morgan('dev'));
}

// Отдаём статичные файлы из соответствующей директории,
// но только локально, а в бою используем CDN
if (process.env.NODE_ENV === 'development') {
    app.use(express.static(join(__dirname, 'public')));
}

// Разбираем тело POST запроса
// Запрос приходит в urlencoded формате (обычный для HTML форм)
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Выводим ошибку, если не смогли разобрать POST запрос, и продолжаем работу
app.use((err, req, res, next) => {
    console.error(err.stack);

    next();
});

// Собираем общие данные для всех страниц приложения
app.use(commonData);

// Подключаем маршруты
routes(app, passport);

// Фиксируем фатальную ошибку и отправляем ответ с кодом 500
app.use((err, req, res, next) => {
    if (config.get('debug')) {
        // В debug-режиме выводим информацию об ошибке на страницу
        res.render('error', err);
    } else {
        console.error(err.stack);

        res.sendStatus(500);
    }
});

app.listen(config.get('port'), () => {
    console.info(`Open http://localhost:${config.get('port')}/`);
});

module.exports = app;
