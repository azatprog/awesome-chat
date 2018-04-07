const User = require('../models/user');

exports.item = (req, res) => {
    const user = User.find(req.params.id);
};