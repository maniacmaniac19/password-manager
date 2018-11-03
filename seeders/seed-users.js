// Import Database Models
// =============================================================
const db = require('../models');

// Syncing our sequelize models 
// =============================================================
db.sequelize.sync().then(function() {
  db.user_data.bulkCreate([{
      email: 'alice@abc.com',
      user_name: 'Alice',
      password: 'password',
    }, {
        email: 'bob@abc.com',
        user_name: 'Bob',
        password: 'password',
      },{
        email: 'mal@abc.com',
        user_name: 'Mal',
        password: 'password', 
      }, ]).then(function(response) {
    console.log('Data successfully added!')
  }).catch(function(error) {
    console.log('Error', error)
  });
});