'use strict';

const RiotAPI = require('controllers/riot/api');

class RiotTeamsAPI extends RiotAPI {

    listBySummoner(summonerId) {
        return new Promise((resolve, reject) => {
            let url = '/team/by-summoner/{summonerId}';

            url = url.replace('{summonerId}', summonerId);

            this.makeGetRequest(url).then((data) => {
                return resolve(data);
            }).catch((err) => {
                return reject(err);
            });
        });
    }

}

module.exports = RiotTeamsAPI;
