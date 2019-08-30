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
    User.findById(req.params.id, function (err, parent) {

        console.log(parent);
          res.render('/user', { parent, user: req.user.id });
      });
    };


function edit(req, res) {
    res.render('/user/child/edit', {
        title: 'Edit Child',
        user: req.user,
    });
};

function deleteChild(req, res) {
    User.findById(req.user._id, function(err, foundUser) {
        foundUser.child.id(req.params.id).remove();
        foundUser.save(function(err) {
            res.redirect('/user');
        });
    });
};
//TODO remove comments below
//          console.log(foundUser, req.params.id);
//         // console.log("child", foundUser.child[0][_id]);
//         // foundUser.child.forEach( function(c) {
//         //     //if (req.params._id === )
//         // });
//         res.redirect('/user');
//     });
// };

module.exports = {
    new: childNew,
    create,
    edit,
    index,
    show,
    deleteChild
};