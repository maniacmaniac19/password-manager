// Import Database Models
// =============================================================
const db = require('../models');

// Syncing our sequelize models 
// =============================================================
db.sequelize.sync().then(function() {
  db.pword_data.bulkCreate([{
      name: 'Google',
      URL: 'gmail.com',
      user_name: 'Alice1221',
      password: 'password',
    }, {
        name: 'Facebook',
        URL: 'facebook.com',
        user_name: 'Alice1221',
        password: 'password',
      },{
        name: 'Spotify',
        URL: 'spotify.com',
        user_name: 'Alice1221',
        password: 'password',
      }, ]).then(function(response) {
    console.log('Data successfully added!')
  }).catch(function(error) {
    console.log('Error', error)
  });
});