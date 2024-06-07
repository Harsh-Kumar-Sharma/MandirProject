const { MASTER_CITY } = require('../config/tables');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    MASTER_CITY,
    {
      id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      city_name: {
        type: DataTypes.STRING,
      },
      state_code: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
    }
  );
};
