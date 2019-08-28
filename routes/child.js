var express = require('express');
var router = express.Router();
var childCtrl = require('../controllers/child');



router.get('/edit', childCtrl.childEdit);
router.get('/', childCtrl.childPage);
router.get('/new', childCtrl.childNew);


module.exports = router;
