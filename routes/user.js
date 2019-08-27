var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');

router.get('user/index', usersCtrl.user);



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user/index', {
    user: req.user.name, 
  });
});

module.exports = router;

