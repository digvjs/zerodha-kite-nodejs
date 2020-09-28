const axios = require('axios');

const {
    API_URL: apiUrl,
} = process.env;


module.exports = {

    get: (uri, headers = {}) => {
        let options = {};
        options['headers'] = headers;

        console.log('Get user thing -------------------------', options);
        
        return axios.get(apiUrl + uri, options)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
                return false;
            });
    },

    post: (uri, data, headers = {}) => {
        let options = {};
        options['headers'] = headers;

        return axios.post(apiUrl + uri, data, options)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
                return false;
            });
    },

    put: (uri, data, headers = {}) => {
        let options = {};
        options['headers'] = headers;

        return axios.put(apiUrl + uri, data, options)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);;
                return false;
            });
    },

    delete: (uri, headers = {}) => {
        let options = {};
        options['headers'] = headers;

        return axios.delete(apiUrl + uri, options)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
                return false;
            });
    },

};
