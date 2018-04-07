const UsersModel = require('../models/user');

exports.create = (req, res) => {
    user = new UsersModel({
        username: req.body.username,
<<<<<<< HEAD
        password: req.body.password,
=======
        password: req.body.password
>>>>>>> bb68a527ae3a72e36f9a62b48453a325f9c0a5af
    });

    user.save(function (err) {
        if (!err) {
            return res.status(200).send(user);
<<<<<<< HEAD
        } else {
            return res.status(500).send(err);
        }
=======
        }
        return res.status(500).send(err);
>>>>>>> bb68a527ae3a72e36f9a62b48453a325f9c0a5af
    });
};

exports.item = (req, res) => {
    UsersModel.findById(req.params.id, function (err, user_data) {
        if (!err) {
            return res.status(200).send(user_data);
<<<<<<< HEAD
        } else {
            console.log(err);
            return res.status(500).send(err);
        }
    });
};
=======
        }
        console.log(err);
        return res.status(500).send(err);
    });
};

exports.doLogin = function (req, res) {
    passport.authenticate('local')(req, res, function () {
        res.redirect('/');
    });
};
>>>>>>> bb68a527ae3a72e36f9a62b48453a325f9c0a5af
