'use strict';

const path = require('path');

require('app-module-path').addPath(path.join(__dirname, '../'))

const config = require('config');
const RiotAPI = require('controllers/riot/index')(config.riot.base_url, config.riot.api_key);

const summonersController = require('controllers/treeline/summoners');

module.exports = ((summonerNames) => {

    RiotAPI.Summoners.getAllByName(summonerNames).then((summoners) => {
        return summonersController.createMultiple(summoners)
    }).then(() => {
        console.log('Done!');
    }).catch((err) => {
        console.log(err);
    });

})([
    'maxdeviant',
    'initinate',
    'therastamasta',
    'kevbotonline'
]);
