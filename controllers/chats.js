const ChatsModel = require('../models/chat');

exports.create = (req, res) => {
    let chat = new ChatsModel({
        owner: req.user._id,
        participants: req.body.participants,
    });

    chat.save(function (err) {
        if (!err) {
            return res.status(200).send();
        } else {
            return res.status(500).send(err);
        }
    });
};

exports.list = (req, res) => {
    ChatsModel.find({'owner': req.user._id}, function (err, user_data) {
        if (!err) {
            return res.status(200).send(user_data);
        } else {
            return res.status(500).send(err);
        }
    });
};

exports.addParticipant = (req, res) => {
    ChatsModel.findById(req.body.chat, function (err, chat) {
        if (!err) {
            chat.participants.push(req.body.user);
            chat.save();
            return res.status(200).send(chat);
        } else {
            return res.status(404).send(err);
        }
    })
};