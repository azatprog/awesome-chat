const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatsSchema = new Schema({
    owner: { type: String, required: true},
    name: {type: String, required: false},
    participants: { type: Array, required: true},
});

const ChatsModel = mongoose.model('chats', ChatsSchema);
module.exports = ChatsModel;
