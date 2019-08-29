const User = require('../models/user');

function index(req, res) {
    User.find({}, function (err, users) {
        res.render('index', {
            title: 'Baby Steps',
            users,
            user: req.user,
            name: req.query.name,
            // sortkey
        });
    });
};

module.exports = {
    index
};