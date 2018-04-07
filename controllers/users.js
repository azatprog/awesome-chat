const UsersModel = require('../models/user');

exports.create = (req, res) => {
    user = new UsersModel({
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

exports.item = (req, res) => {
    UsersModel.findById(req.params.id, function (err, user_data) {
        if (!err) {
            return res.status(200).send(user_data);
        } else {
            console.log(err);
            return res.status(500).send(err);
        }
    });
};
