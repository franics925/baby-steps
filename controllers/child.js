const User = require('../models/user');



function index(req, res) {
    res.render('child', {
        title: 'Baby Steps',
        user: req.user,
    });
};

function childNew(req, res) {
    res.render('child/new', {
        title: 'New Child',
        user: req.user,
    });
};

function create(req, res) {
    User.findById(req.params.id, function(err, user) {
        user.child.push(req.body);
        user.save(function(err, user) {
        res.redirect(`/user`);
        console.log(user);
        });
    });
};



function edit(req, res) {
    res.render('/user/child/edit', {
        title: 'Edit Child',
        user: req.user,
    });
};

function show(req, res) {
        console.log(req.params.id);
            res.render('child/show', {
                user: req.user
            });
    };


    // User.child._id(req.params.id, function( err, child){
    //     console.log(child);
    //     res.render('child/index', { child, user: req.user });
    // });
    // User.findById(req.params.id, function (err, parent) {
    //     // parent.child(req.params.id)
    //     console.log(req.params.id);
    // });
// };

function deleteChild(req, res) {
    User.findById(req.user._id, function(err, foundUser) {
        foundUser.child.id(req.params.id).remove();
        foundUser.save(function(err) {
            res.redirect('/user');
        });
    });
};


module.exports = {
    new: childNew,
    create,
    edit,
    index,
    show,
    deleteChild
};