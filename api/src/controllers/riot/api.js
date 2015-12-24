'use strict';

const url = require('url');
const request = require('request');

class RiotAPI {

    constructor(baseUrl, region, version, apiKey) {
        this.baseUrl = baseUrl
            .replace('{region}', region)
            .replace('{version}', version.replace(/[^0-9\.]/, ''));

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

                return resolve(JSON.parse(body));
            });
        });
    }

    makeGetRequest(route) {
        return this.makeRequest('GET', route);
    }

}

module.exports = RiotAPI;
