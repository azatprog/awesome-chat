'use strict';

const config = require('config');

module.exports = (req, res, next) => {
    // Хранение в res.locals – рекомендованный способ
    // Не перезаписываем, а дополняем объект
    res.locals.meta = {
        charset: 'utf-8',
        description: 'Awesome chat'
    };

    res.locals.title = 'Awesome chat';

    res.locals.staticBasePath = config.get('staticBasePath');

    next();
};
