var express = require('express');
var router = express.Router();

const httpClient = require('../../src/services/httpClient');

router.post('/login', async (req, res, next) => {
    let loginUrl = await httpClient.get('/api/auth/kite/login-url');
    res.redirect(loginUrl.data.login_url);
});

router.get('/login/confirm', async (req, res, next) => {
    if ( req.query.status != 'success') {
        // Failed
        alert('Failed to login! Redirecting back...');
        res.redirect('/');
        return;
    }

    let requestToken = req.query.request_token;
    let response = await httpClient.post('/api/auth/login', {
        request_token: requestToken
    });

    if (response.status) {
        // Set access token here, which you will get from response
        req.session.access_token = response.data.user.access_token;
    }

    res.redirect('/user');
});


router.post('/logout', async (req, res, next) => {
    let response = await httpClient.post('/api/auth/logout', {}, {
        'authorization': 'Bearer ' + req.session.access_token || ''
    });
    console.log(response);

    // Delete access token
    delete req.session.access_token;

    res.redirect('/');
});

module.exports = router;
