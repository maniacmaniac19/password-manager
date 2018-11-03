module.exports = function(sequelize, DataTypes) {
    const user_data = sequelize.define('user_data', {
      user_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      email: {
        type: DataTypes.STRING
      },
      user_name: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
    });
  
    return user_data;
  }