var express = require('express');
var router = express.Router();
var childCtrl = require('../controllers/child');

router.get('child/index', childCtrl.child);



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('child/index', {
    user: req.user.name, 
  });
});

module.exports = router;
