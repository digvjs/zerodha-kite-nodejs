var express = require('express');
var router = express.Router();

const httpClient = require('../../src/services/httpClient');

/* GET home page. */
router.get('/', async (req, res, next) => {
    
    let user = await httpClient.get('/api/user', {
        'authorization': 'Bearer ' + req.session.access_token || ''
    });

    let holdings = await httpClient.get('/api/user/holdings', {
        'authorization': 'Bearer ' + req.session.access_token || ''
    });
    console.log(holdings);

    res.render('user', { 
        user: user.data.user,
        holdings: holdings.data.holdings
    });
});

module.exports = router;
