
const User = require('../models/user');
const Child = require('../models/user');

function create(req, res) {

};
function newEvent(req, res) {
    res.render('event/new', {
        title: 'Baby Steps New Event',
        user: req.user,
    });
};
function show(req, res) {
    res.render('event', {
        title: 'Baby Steps Event',
        user: req.user,
    });
};
function edit(req, res) {
    res.render('event/edit', {
        title: 'Baby Steps Event',
        user: req.user,
    });
};

module.exports = {
    show,
    new: newEvent,
    edit,
    create
};