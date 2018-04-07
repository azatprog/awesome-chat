const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true },
});

UserSchema.plugin(passportLocalMongoose);

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;
