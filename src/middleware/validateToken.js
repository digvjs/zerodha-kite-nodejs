const jwt = require('jsonwebtoken');

const {
    JWT_PASSPHRASE: jwtSecret
} = process.env;

module.exports = {
    validateToken: (req, res, next) => {
        const authorizationHeader = req.headers.authorization;
        if (authorizationHeader) {
            const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
            const options = { expiresIn: '2d' };
            try {
                let result = jwt.verify(token, jwtSecret, options);
                req.decoded = result;
                next();
                
            } catch (err) {
                res.status(401).send({ 
                    message: `Authentication error. Token required.`,
                    status: false
                });
            }

        } else {
            res.status(401).send({ 
                message: `Authentication error. Token required.`,
                status: false
            });
        }
    }
};