'use strict';

const Controller = require('controllers/treeline/controller');
const Summoner = require('models/summoner');

class SummonersController extends Controller {

    constructor() {
        super();
    }

    create(data) {
        return new Promise((resolve, reject) => {
            let team = Summoner.build(data);

            team.save().then(() => {
                return resolve(team);
            }).catch((err) => {
                return reject(err);
            });
        });
    }

    createMultiple(data) {
        return new Promise((resolve, reject) => {
            Summoner.bulkCreate(data).then(() => {
                return resolve(true);
            }).catch((err) => {
                return reject(err);
            });
        });
    }

    listAll() {
        return new Promise((resolve, reject) => {
            Summoner.findAll().then((summoners) => {
                return resolve(summoners);
            }).catch((err) => {
                return reject(err);
            })
        });
    }

}

module.exports = new SummonersController();
