const User = require('../models/user');

function user(req, res) {
    User.find({}, function (err, users) {
        res.render('user/index', {
            title: 'Baby Steps',
            users,
            user: req.user,
            name: req.query.name,
            sortkey
        });
    });
};

module.exports = {
    index
};