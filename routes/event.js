var express = require('express');
var router = express.Router();
var eventCtrl = require('../controllers/event');

router.get('/:id', eventCtrl.show);
router.get('/new', eventCtrl.new);
router.get('/edit', eventCtrl.edit)


module.exports = router;