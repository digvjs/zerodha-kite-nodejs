const Joi = require('joi');

module.exports = {
    
    validateBody: (schema) => { 
        return (req, res, next) => { 
            const result = Joi.validate(req.body, schema);
            if (result.error) { 
                return res.status(400).json(result.error);
            }
            
            if (!req.value) { req['value'] = {}; }
            req.value['body'] = result.value;
            next();
        }
    },
    
    schemas: {

        /** Auth routes */
        auth: {
            
            login: Joi.object().keys({
                request_token: Joi.string().required()
            }),

            register: Joi.object().keys({}),

        },
        
    }
}