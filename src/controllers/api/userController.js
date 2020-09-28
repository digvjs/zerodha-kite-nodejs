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

/**
 * userController
 */
let userController = {
    
    /**
     * Get user profile
     * @param  {} req
     * @param  {} res
     * @returns json
     */
    index: async (req, res) => {
        try {
            // get user
            var kc = await kite.kiteConnect(req);

            kc.getProfile()
                .then(response => {
                    res.json({
                        status: true,
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
            res.status(400).json({ message: ex.message });
        }
    },
    
    /**
     * @param  {} req
     * @param  {} res
     */
    holdings: async (req, res) => {
        try {
            // get user
            var kc = await kite.kiteConnect(req);

            kc.getHoldings()
                .then(response => {

                    response.forEach(element => {
                        console.log(element);
                    });

                    res.json({
                        status: true,
                        data: {
                            holdings: response
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
            res.status(400).json({ message: ex.message });
        }
    }
}

module.exports = userController;