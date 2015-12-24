'use strict';

const RiotLeaguesAPI = require('controllers/riot/leagues');

module.exports = ((baseUrl, apiKey) => {

    return {
        Leagues: new RiotLeaguesAPI(baseUrl, 'na', '2.5', apiKey)
    };

});
