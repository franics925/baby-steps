const User = require('../models/user');
const Child = require('../models/user'); 


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
        });
    });
    // // if (req.body) {
    // //     req.body.departs = undefined;
    // //   }
    //   const child = new Child(req.body)
    //   console.log('child created', child, user);
    //   child.save(function (err) {
    //     //if errors rerender try again....
    //     if (err) return res.render('/user/child/new')
    //     //redirects to main flights page.
    //     res.redirect('/user')
        
    //   });
};

function show(req, res) {
    User.findById(req.params.id, function (err, user) {
        Child.find({child: child._id}, function(err, children) {
          res.render('/user', { user, children });
        });
      });
};


function edit(req, res) {
    res.render('/user/child/edit', {
        title: 'Edit Child',
        user: req.user,
    });
};

module.exports = {
    new: childNew,
    create,
    edit,
    index,
    show
};