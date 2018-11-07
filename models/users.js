'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    id: {
      primaryKey: true,
      type: DataTypes.STRING      
    },
    email: {
      type: DataTypes.STRING
    }
  }, {});
  user.associate = function(models) {
    user.hasMany(models.pword_data, {onDelete: 'CASCADE'});
  };
  return user;
};