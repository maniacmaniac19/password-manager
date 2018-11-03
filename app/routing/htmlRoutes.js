const express = require("express");
const path = require('path');
const router = express.Router();
const db = require('../../models');

router.get('/', (req, res) =>{
    res.render('home');
});

router.get('/api/secret', (req, res) => {
    // res.render('secrets');
    db.pword_data.findAll().then(pword => {       
        res.render('secrets', { pword });
    });
});

module.exports = router;