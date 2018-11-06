// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   var user = sequelize.define('user', {
//     id: {
//       primaryKey: true,
//       type: DataTypes.STRING      
//     },
//     email: {
//       type: DataTypes.STRING
//     }
//   }, {});
//   User.associate = function(models) {
//     User.hasMany(models.<PASSWORDTABLENAME>, {onDelete: 'CASCADE'});
//   };
//   return User;
// };