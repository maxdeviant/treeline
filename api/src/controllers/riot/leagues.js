'use strict';

const RiotAPI = require('controllers/riot/api');

class RiotLeaguesAPI extends RiotAPI {

    getChallenger3v3Teams() {
        return new Promise((resolve, reject) => {
            this.makeGetRequest('/league/challenger?type=RANKED_TEAM_3x3').then((teams) => {
                return resolve(teams);
            }).catch((err) => {
                return reject(err);
            });
        });
    }

}

module.exports = RiotLeaguesAPI;
