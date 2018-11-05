const express = require("express");
const router = express.Router();
const path = require('path');
const db = require('../../models');
const en = require('../../crypto');

router.get('/api/secrets', function (req, res) {
	db.pword_data.findAll({}).then(function (response, err) {
		if (err) {
			res.json(err)
		}
		res.json(response)
	});
});


//----------UPDATE INFORMATION WHEN IN VAULT----------//
router.put('/secret/:id', function (req, res) {
	console.log("=========================================")
	console.log(req.body);
	let updatePW = en.encrypt(req.body.password);
	console.log(req.body.password);
	console.log(updatePW);

	// let idWhere = $(this).closest(".card").find("#id");
	// console.log(idWhere);
	db.pword_data.update({url: req.body.url, user_name: req.body.user_name, password:updatePW},{
			where: { id: req.params.id
		}
	}).then(function (response, err) {
		if (err) {
			res.json(err)
		}
		console.log(response)
		res.json(response)
	});
});

router.delete('/secret/:id', function (req, res) {
	console.log("=========================================")
	console.log(req.body);
	let updatePW = en.encrypt(req.body.password);
	console.log(req.body.password);
	console.log(updatePW);

	// let idWhere = $(this).closest(".card").find("#id");
	console.log(idWhere);
	db.pword_data.destroy({
		where: {
		  id: req.params.id
		}
	  });
		});

router.post('/secret', function (req, res) {
	let pw = en.encrypt(req.body.password);
	db.pword_data.create({ name: req.body.name, url: req.body.url, user_name: req.body.user_name, password: pw }).then(function (response, error) {
		res.json(response);
	})
});

module.exports = router;

