const User = require('../models/user');

function user(req, res) {
    User.find({}, function (err, users) {
        res.render('user', {
            title: 'Baby Steps',
            users,
            user: req.user,
            name: req.query.name,
            sortkey
        });
    });
};

function showAllChildren(req, res) {
    User.child.find({}, function (err, child) {

    });
};

function userPage(req, res) {
    res.render('user/index', {
    title: 'Baby Steps',
    user: req.user,
    childName: user.childName,
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
    userEdit,
    showAllChildren
};