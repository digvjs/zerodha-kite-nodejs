var express = require('express');
var router = express.Router();
const { validateToken } = require('../../src/middleware/validateToken');
var userController = require('../../src/controllers/api/userController');

router.get('/', userController.index);
router.get('/holdings', userController.holdings);

module.exports = router;
