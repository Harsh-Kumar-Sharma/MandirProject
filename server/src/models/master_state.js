const { MASTER_STATE } = require('../config/tables');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    MASTER_STATE,
    {
      id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      state_name: {
        type: DataTypes.STRING,
      },
      state_code: {
        type: DataTypes.STRING,
      },
      country_code: {
        type: DataTypes.NUMBER,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
    }
  );
};
