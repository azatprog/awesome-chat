const MessagesModel = require('../models/message');
const MESSAGES_LIMIT = 10;

exports.create = (req, res) => {
    let message = new MessagesModel({
        owner: req.user._id,
        chat_id: req.body.chat_id,
        text: req.body.text,
    });

    message.save(function (err) {
        if (!err) {
            return res.status(200).send();
        } else {
            return res.status(500).send(err);
        }
    });
};


exports.list = (req, res) => {
    let limit = Number(req.query.limit) || MESSAGES_LIMIT;
    let messages = MessagesModel.find().where('chat_id').equals(req.query.chat_id);

    console.log(req.query.previous_id);
    if (req.query.previous_id !== undefined) {
        messages = messages.where('_id').gt(req.query.previous_id)
    }

    messages
        .limit(limit)
        .exec(function (err, chat_data) {
            if (!err) {
                return res.status(200).send(chat_data);
            } else {
                return res.status(500).send(err);
            }
        });
};

exports.delete = (req, res) => {
    MessagesModel
        .find()
        .where('_id').equals(req.body.message_id)
        .remove(function (err) {
            if (!err) {
                return res.status(200).send();
            } else {
                return res.status(500).send(err);
            }
        });
};
