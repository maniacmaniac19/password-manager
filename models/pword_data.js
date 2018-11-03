
module.exports = function(sequelize, DataTypes) {
    const pword_data = sequelize.define('pword_data', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
      },
      url: {
        type: DataTypes.STRING
      },
      user_name: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      }
    });
  
    return pword_data;
  }