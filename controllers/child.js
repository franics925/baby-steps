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
    res.render('child/index');
};

module.exports = {
    child,
    childPage
};