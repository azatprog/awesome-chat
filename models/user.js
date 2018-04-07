const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
});

const UsersModel = mongoose.model('users', Users);
module.exports = UsersModel;
