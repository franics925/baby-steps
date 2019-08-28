var express = require('express');
var router = express.Router();
var eventCtrl = require('../controllers/event');

router.get('/', eventCtrl.event);
router.get('/new', eventCtrl.newEvent);
router.get('/edit', eventCtrl.editEvent)


module.exports = router;