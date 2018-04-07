const UserModel = require('../models/user');

exports.create = (req, res) => {
    user = new UserModel({
        username: req.body.username,
        password: req.body.password,
    });

    user.save(function (err) {
        if (!err) {
            return res.status(200).send(user);
        } else {
            return res.status(500).send(err);
        }
    });
};

exports.detail = (req, res) => {
    UserModel.findById(req.params.id, function (err, user_data) {
        if (!err) {
            return res.status(200).send(user_data);
        } else {
            return res.status(500).send(err);
        }
    });
};

exports.list = (req, res) => {
    UserModel.find({}, function(err, users) {
        return res.status(200).send({users: users});
    });
};