var express = require('express');
var router = express.Router();
var eventCtrl = require('../controllers/event');

router.get('/', eventCtrl.event);
router.get('/new', eventCtrl.newEvent);


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('user/index', {
//     user: req.user.name, 
//   });
// });

module.exports = router;