const express = require("express");
const router = express.Router();
const path = require('path');
const db = require('../../models');
const en = require('../../crypto');

// router.get('/api/users', function(req, res){
	
//   	db.user_data.findAll({}).then(function(response, err){
// 		if (err){
// 			res.json(err)
// 		}
// 		res.json(response)
// 	  });
// });

router.get('/api/secrets', function(req, res){
	db.pword_data.findAll({}).then(function(response, err){
	  if (err){
		  res.json(err)
	  }
	  res.json(response)
	});
});

router.post('/api/secret', function(req, res){

	
	console.log(req.body.password);
	let pw = en.encrypt(req.body.password)
		
	db.pword_data.create({name: req.body.name, url: req.body.url, user_name: req.body.user_name, password: pw}).then(function(response, error){
		res.json(response);
	})
});




module.exports = router;

