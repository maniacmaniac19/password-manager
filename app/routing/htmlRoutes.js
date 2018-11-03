const express = require("express");
const path = require('path');
const router = express.Router();
const db = require('../../models');
const en = require('../../crypto');

router.get('/', (req, res) =>{
    res.render('home');
});

router.get('/api/secret', (req, res) => {
    let data ={}
    db.pword_data.findAll().then(pword => {
        JSON.stringify(pword, null, 2);  
        for(i=0; i < pword.length; i++){
            console.log(pword[i].dataValues);
            let de = en.decrypt(pword[i].dataValues.password);
            data = {
                name: pword[i].dataValues.name,
                url: pword[i].dataValues.url,
                password: de,
        }     
        console.log(data);
        }
        // res.render('secrets', { data });
        res.render('secrets', { pword});
    });
});

module.exports = router;