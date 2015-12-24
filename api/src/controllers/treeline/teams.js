'use strict';

const Controller = require('controllers/treeline/controller');
const Team = require('models/team');

class TeamsController extends Controller {

    constructor() {
        super();
    }

    create(data) {
        return new Promise((resolve, reject) => {
            let team = Team.build(data);

            team.save().then(() => {
                return resolve(team);
            }).catch((err) => {
                return reject(err);
            });
        });
    }

    listAll() {
        return new Promise((resolve, reject) => {
            Team.findAll().then((teams) => {
                return resolve(teams);
            }).catch((err) => {
                return reject(err);
            })
        });
    }

}

module.exports = new TeamsController();
