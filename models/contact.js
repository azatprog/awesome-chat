const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contact = new Schema({
    user: { type: String, required: true },
    contact: { type: String, required: true },
});

const UserContactModel = mongoose.model('contacts', Contact);
module.exports = UserContactModel;
