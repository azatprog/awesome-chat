const UserContactModel = require('../models/contact');

exports.create = (req, res) => {
    user = new UserContactModel({
        user: req.user._id,
        contact: req.body.contact,
    });

    user.save(function (err) {
        if (!err) {
            return res.status(200).send(user);
        } else {
            return res.status(500).send(err);
        }
    });
};

exports.list = (req, res) => {
    UserContactModel.find({'user': req.user._id}, function (err, user_data) {
        if (!err) {
            return res.status(200).send(user_data);
        } else {
            return res.status(500).send(err);
        }
    });
};