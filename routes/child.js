var express = require('express');
var router = express.Router();
var childCtrl = require('../controllers/child');



router.get('/edit', childCtrl.edit);
router.get('/', childCtrl.index);
router.get('/new', childCtrl.new);


module.exports = router;
