const express = require('express');
const router = express.Router();
const path = require('path');
const context = require('./admin').context; // Corrected path to import users

router.get('/', (req, res, next) => {
    res.render('home', { title: 'Home', contxt: context });
});

module.exports = router;
