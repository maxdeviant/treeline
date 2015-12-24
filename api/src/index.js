'use strict';

require('app-module-path').addPath(__dirname);

const util = require('util');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const config = require('config');

const app = express();

app.set('jwtTokenSecret', config.token_secret);

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', 'Content-Type, X-Access-Token');

    next();
});

app.use('/', require('routes/health'));

app.set('host', process.env.HOST || '0.0.0.0');
app.set('port', process.env.PORT || 3000);

let server = app.listen(app.get('port'), app.get('host'), () => {
    console.log(util.format('Treeline API listening on %s:%d', app.get('host'), app.get('port')));
});
