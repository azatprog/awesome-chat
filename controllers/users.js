const UserModel = require('../models/user');

exports.create = (req, res) => {
    UserModel.register(
        new UserModel({username: req.body.username}), req.body.password, function (err, user) {
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

exports.doLogin = function (req, res) {
    passport.authenticate('local')(req, res, function () {
        res.redirect('/');
    });
};

exports.list = (req, res) => {
    UserModel.find({}, function(err, users) {
        return res.status(200).send({users: users});
    });
};

