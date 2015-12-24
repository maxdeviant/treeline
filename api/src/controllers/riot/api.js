'use strict';

const url = require('url');
const request = require('request');

class RiotAPI {

    constructor(baseUrl, apiKey) {
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
    }

    makeRequest(method, route) {
        return new Promise((resolve, reject) => {
            let r = request({
                url: route,
                method: method,
                baseUrl: this.baseUrl,
                qs: {
                    api_key: this.apiKey
                }
            }, (error, response, body) => {
                if (response.statusCode !== 200) {
                    return reject({
                        status: response.statusCode
                    });
                }

                return resolve(body);
            });
        });
    }

    makeGetRequest(route) {
        return this.makeRequest('GET', route);
    }

}

module.exports = RiotAPI;
