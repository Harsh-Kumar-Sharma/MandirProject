const { MASTER_COUNTRY } = require('../config/tables');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    MASTER_COUNTRY,
    {
      id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      country_name: {
        type: DataTypes.STRING,
      },
      country_code: {
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
