/**
* -----------------------------------------------------------------------------
* @author Digvijay Suryawanshi <diggy@konkrete.io>
* @dated  2nd July 2020
* -----------------------------------------------------------------------------
*/

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const randomString = require('randomstring');

let kite = require('../../services/kite');

const {
    JWT_PASSPHRASE: jwtSecret,
    KITE_API_KEY: kiteApiKey,
    KITE_API_SECRET: kiteApiSecret
} = process.env;

/**
 * authController
 */
let authController = {
    
    /**
     * Gets the login url from kite API
     * @param  {} req
     * @param  {} res
     * @returns json
     */
    getLoginURL: async (req, res) => {
        try {
            let kc = await kite.kiteConnect(req);
            let loginUrl = kc.getLoginURL();
            res.json({
                status: true,
                data: {
                    login_url: loginUrl
                }
            });

        } catch (ex) {
            res.status(400).json({
                message: ex.message
            })
        }
    },
    
    /**
     * Does login to kite and generate access token
     * @param  {} req
     * @param  {} res
     * @returns json
     */
    login: async (req, res) => {
        
        let requestToken = req.body.request_token;
        
        try {
            var kc = await kite.kiteConnect(req);
            
            kc.generateSession(requestToken, kiteApiSecret)
                .then(response => {
                    res.json({
                        status: true,
                        message: 'Login successful!',
                        data: {
                            user: response
                        }
                    });
                })
                .catch(err => {
                    console.log(err);
                    res.status(400).json({
                        message: err.message
                    })
                });
            
        } catch (ex) {
            res.status(400).json({
                message: ex.message
            })
        }
        
    },
    
    /**
    * Create new user
    * @param  {} req
    * @param  {} res
    * @returns json
    */
    register: async (req, res) => {
        try {
            // TODO
            // Add register process here 

            res.json({
                status: true,
                message: 'Registration successful!'
            })
        
        } catch (ex) {
            res.status(400).json({ message: ex.message })
        }
        
    },
    
    /**
    * @param  {} req
    * @param  {} res
    * @returns json
    */
    logout: async (req, res) => {
        try {
            // logout process here
            var kc = await kite.kiteConnect(req);

            kc.invalidateAccessToken();
            
            res.json({
                status: true,
                message: 'Logout successful!',
            })

        } catch (ex) {
            res.status(400).json({ message: ex.message });
        }
    },
}

module.exports = authController;