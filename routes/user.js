var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');


router.get('/', usersCtrl.userPage);
router.get('/edit', usersCtrl.userEdit);





module.exports = router;

