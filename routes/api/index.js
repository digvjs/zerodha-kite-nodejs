var express = require('express');
var router = express.Router();

router.use('/auth', require('./auth'));
router.use('/user', require('./user'));

module.exports = router;
