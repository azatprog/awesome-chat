'use strict';

const path = require('path');
const join = path.join;

const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const pug = require('pug');
const morgan = require('morgan');

// const routes = require('./routes/index');
const commonData = require('./middlewares/common-data');

const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

require('./models/db');
require('./config/passport');

const routesApi = require('./routes/index');

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
// app.use(bodyParser.urlencoded({
//     extended: true
// }));  
//changed..
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(cors());

app.use(passport.initialize());

// Выводим ошибку, если не смогли разобрать POST запрос, и продолжаем работу
app.use((err, req, res, next) => {
    console.error(err.stack);

    next();
});


// Собираем общие данные для всех страниц приложения
app.use(commonData);

// Подключаем маршруты
// path starts with /api
app.use('/api', routesApi);

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



const Message = require('./models/message');
const User = require('./models/users');
const eventSocket = io.of('/events');

eventSocket.on('connection', function (socket) {
    console.log('Client connected...');

    User.find({}).exec(function (err, users) {
        console.log(users);
        socket.emit('loadContacts', users);
    });

    Message.find({}).exec(function (err, messages) {
        console.log('Messages sent.');
        socket.emit('loadMessages', messages);
    });
    socket.on('sendMessage', function (msg) {
        new Message({
            sender: msg.sender,
            text: msg.text
        }).save();

        eventSocket.emit('receiveMessage', msg);
    });
});

app.socket = eventSocket;

server.listen(config.get('port'), () => {
    console.info(`Open http://localhost:${config.get('port')}/`);
});

module.exports = app;
