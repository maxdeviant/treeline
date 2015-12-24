'use strict';

const Sequelize = require('sequelize');

const config = require('config');
const db = config.postgres;

const sequelize = new Sequelize(db.database, db.username, db.password, {
    host: db.host,
    dialect: db.dialect
});

module.exports = sequelize;
