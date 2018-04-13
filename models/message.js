const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessagesSchema = new Schema({
    owner: { type: String, required: true},
    text: {type: String, required: true},
    chat_id: { type: String, required: true},
});

const MessagesModel = mongoose.model('messages', MessagesSchema);
module.exports = MessagesModel;
