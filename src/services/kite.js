var KiteConnect = require("kiteconnect").KiteConnect;

const {
    KITE_API_KEY: kiteApiKey
} = process.env;

module.exports = {

    kiteConnect: async (req) => {
        try {
            var kc = new KiteConnect({
                api_key: kiteApiKey
            });

            if (req.headers.authorization) {
                const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
                await kc.setAccessToken(token);
            }
            
            return kc;

        } catch (ex) {
            return new Error(ex.message);
        }
    },

};
