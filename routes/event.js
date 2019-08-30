var express = require('express');
var router = express.Router();
var eventCtrl = require('../controllers/event');

router.get('/new', eventCtrl.new);
router.get('/edit', eventCtrl.edit)
router.get('/:id', eventCtrl.show);


module.exports = router;