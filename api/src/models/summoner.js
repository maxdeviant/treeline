'use strict';

const Sequelize = require('sequelize');
const database = require('database');

const Summoner = database.define('Summoner', {
    id: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    level: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    last_seen: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

database.sync();

module.exports = Summoner;
