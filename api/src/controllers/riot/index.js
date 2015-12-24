'use strict';

const RiotLeaguesAPI = require('controllers/riot/leagues');
const RiotSummonersAPI = require('controllers/riot/summoners');
const RiotTeamsAPI = require('controllers/riot/teams');

module.exports = ((baseUrl, apiKey) => {

    return {
        Leagues: new RiotLeaguesAPI(baseUrl, 'na', 'v2.5', apiKey),
        Summoners: new RiotSummonersAPI(baseUrl, 'na', 'v1.4', apiKey),
        Teams: new RiotTeamsAPI(baseUrl, 'na', 'v2.4', apiKey)
    };

});
