var express = require('express');
var router = express.Router();
const { validateBody, schemas } = require('../../src/services/validator');
const { validateToken } = require('../../src/middleware/validateToken');
var authController = require('../../src/controllers/api/authController');

router.get('/kite/login-url', authController.getLoginURL);
router.post('/login', validateBody(schemas.auth.login), authController.login);
router.post('/register', validateBody(schemas.auth.register), authController.register);
// router.post('/logout', validateToken, authController.logout);
router.post('/logout', authController.logout);

module.exports = router;
