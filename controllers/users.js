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
    res.render('user/index', {
    title: 'Baby Steps',
    user: req.user,
    });
};

function userEdit(req, res) {
    res.render('user/edit', {
    title: 'Edit User',
    user: req.user
    });
};

module.exports = {
    user,
    userPage,
    userEdit
};