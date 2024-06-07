const { MASTER_UNIT } = require('../config/tables');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    MASTER_UNIT,
    {
      id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      unit_name: {
        type: DataTypes.STRING,
      },
      unit_code: {
        type: DataTypes.STRING,
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
    }
  );
};
