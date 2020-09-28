var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Awesome Trading Platform' });
});

router.use('/auth', require('./auth'));
router.use('/user', require('./user'));

module.exports = router;
