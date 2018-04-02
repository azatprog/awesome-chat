# Cкелет проетка

В основе сервиса [Express.js](https://expressjs.com/) и [pug.js](https://pugjs.org/).  
Статика сервиса размещается на CDN [Surge](https://surge.sh/), а сам сервис в облаке [Now](https://zeit.co/now).

### Разработка

В первую очередь __необходимо выбрать уникальное имя проекта__,  
и указать его в поле `name` файла `package.json`.

Далее устанавливаем зависимости:

```sh
npm i
```

Запускаем сервис локально:

```sh
npm run dev
```

И открываем в браузере:  
http://localhost:3000/

### Развёртывание

Размещаем статику (в первый раз потребуется ввести почту и пароль):

```sh
npm run deploy:surge
```

Далее размещаем сам сервис  (в первый раз потребуется ввести почту и подтвердить её по ссылке в письме):

```sh
npm run deploy:now
```

### Доступные команды

| Команда | Действие |
| ------------- | ------------- |
| clean | Удаление зависимостей |
| deploy | Развёртывание сервиса |
| deploy:surge | Размещение статики (изображений и стилей) в [Surge](https://surge.sh/) |
| deploy:now | Развёртывание сервиса в [Now](https://zeit.co/now) |
| dev | Запуск сервиса локально |
| lint | Запуск всех проверок |
| lint:css | Проверка CSS файлов на соответствие правилам оформления кода |
| lint:js | Проверка JS файлов на соответствие правилам оформления кода |
| test | Запуск тестов |
