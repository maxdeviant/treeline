'use strict';

const RiotAPI = require('controllers/riot/api');

class RiotSummonersAPI extends RiotAPI {

    getOneByName(summonerName) {
        return new Promise((resolve, reject) => {
            let url = '/summoner/by-name/{summonerName}';

            url = url.replace('{summonerName}', summonerName);

            this.makeGetRequest(url).then((data) => {
                let summoner = data[summonerName];

                return resolve({
                    id: summoner.id,
                    name: summoner.name,
                    level: summoner.summonerLevel,
                    last_seen: new Date(summoner.revisionDate)
                });
            }).catch((err) => {
                return reject(err);
            });
        });
    }

    getAllByName(summonerNames) {
        return new Promise((resolve, reject) => {
            let url = '/summoner/by-name/{summonerNames}';

            url = url.replace('{summonerNames}', summonerNames.join(','));

            this.makeGetRequest(url).then((data) => {
                let summoners = [];

                for (let i in data) {
                    summoners.push({
                        id: data[i].id,
                        name: data[i].name,
                        level: data[i].summonerLevel,
                        last_seen: new Date(data[i].revisionDate)
                    });
                }

                return resolve(summoners);
            }).catch((err) => {
                return reject(err);
            });
        });
    }

}

module.exports = RiotSummonersAPI;
