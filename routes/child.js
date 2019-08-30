var express = require('express');
var router = express.Router();
var childCtrl = require('../controllers/child');


router.post('/:id', childCtrl.create);
router.get('/edit', childCtrl.edit);
router.get('/new', childCtrl.new);
router.get('/:id', childCtrl.show);
router.delete('/:id', childCtrl.deleteChild);


module.exports = router;
