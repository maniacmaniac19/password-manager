const express = require("express");
const path = require('path');
const router = express.Router();
const db = require('../../models');
const en = require('../../crypto');

router.get('/', (req, res) =>{
    res.render('home');
});

router.get('/secret', (req, res) => {
    let deData =[]
    db.pword_data.findAll().then(pword => {
        JSON.stringify(pword, null, 2);  
        for(i=0; i < pword.length; i++){
            console.log(pword[i].dataValues);
            let de = en.decrypt(pword[i].dataValues.password);
            data = {
                id: pword[i].dataValues.id,
                user_name: pword[i].dataValues.user_name,
                name: pword[i].dataValues.name,
                url: pword[i].dataValues.url,
                password: de,
        }     
        deData.push(data)
        // console.log(data);
        }
        console.log(deData);
        res.render('secrets', { deData });
        // res.render('secrets', { pword});
    });
});

module.exports = router;