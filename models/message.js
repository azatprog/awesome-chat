const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    sender: {type: String, required: true},
    text: {type: String, required: true}
});

const MessageModel = mongoose.model('messages', MessageSchema);
module.exports = MessageModel;
