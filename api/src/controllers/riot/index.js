'use strict';

const RiotLeaguesAPI = require('controllers/riot/leagues');
const RiotSummonerAPI = require('controllers/riot/summoner');

module.exports = ((baseUrl, apiKey) => {

    return {
        Leagues: new RiotLeaguesAPI(baseUrl, 'na', 'v2.5', apiKey),
        Summoner: new RiotSummonerAPI(baseUrl, 'na', 'v1.4', apiKey)
    };

});
