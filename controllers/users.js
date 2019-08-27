const User = require('../models/user');

function user(req, res) {
    User.find({}, function (err, users) {
        res.render('user/index', {
            title: 'Baby Steps - User',
            users,
            user: req.user,
            name: req.query.name,
            sortkey
        });
    });
};

function userPage(req, res) {
    res.render('user/index');
}

module.exports = {
    user,
    userPage
};