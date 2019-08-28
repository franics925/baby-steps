const User = require('../models/user');

function child(req, res) {
    User.find({}, function (err, users) {
        res.render('user/index', {
            title: 'Baby Steps - Child',
            users,
            user: req.user,
            name: req.query.name,
            sortkey
        });
    });
};


function childPage(req, res) {
    res.render('child', {
        title: 'Child Page',
        user: req.user,
    });
};

function childNew(req, res) {
    res.render('child/new', {
        title: 'New Child',
        user: req.user,
    });
};

function childEdit(req, res) {
    res.render('child/edit', {
        title: 'Edit Child',
        user: req.user,
    });
};

module.exports = {
    child,
    childPage,
    childNew,
    childEdit
};