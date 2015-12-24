'use strict';

const express = require('express');

const router = express.Router();

router.route('/health')
    .get((req, res, next) => {
        return res.status(200).json('OK');
    });

module.exports = router;
