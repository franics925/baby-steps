var express = require('express');
var router = express.Router();
var childCtrl = require('../controllers/child');


router.post('/:id', childCtrl.create);
router.get('/edit', childCtrl.edit);
router.get('/', childCtrl.index);
router.get('/new', childCtrl.new);
router.delete('/:id', childCtrl.deleteChild);


module.exports = router;
