
const User = require('../models/user');

function event(req, res) {
    User.find({}, function (err, users) {
        res.render('user/index', {
            title: 'Baby Steps - Event',
            users,
            user: req.user,
            name: req.query.name,
            sortkey
        });
    });
};

function newEvent(req, res) {
    res.render('event/new', {
        title: 'Baby Steps Event',
        user: req.user,
    });
};

module.exports = {
    event,
    newEvent
};