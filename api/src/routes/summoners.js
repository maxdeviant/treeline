'use strict';

const express = require('express');
const summonersController = require('controllers/treeline/summoners');

const router = express.Router();

router.route('/summoners')
    .get((req, res, next) => {
        summonersController.listAll().then((summoners) => {
            return res.status(200).json(summoners);
        }).catch((err) => {
            return next(err);
        });
    });

module.exports = router;
