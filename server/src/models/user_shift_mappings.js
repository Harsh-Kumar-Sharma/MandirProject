const { USER_SHIFT_MAPPINGS } = require('../config/tables');

module.exports = (sequelize, DataTypes) => {
  const restoSections = sequelize.define(
    USER_SHIFT_MAPPINGS,
    {
      id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      shift_id: {
        type: DataTypes.NUMBER,
      },
      user_id: {
        type: DataTypes.NUMBER,
      },
      created_at: {
        type: DataTypes.DATE,
      },
      updated_at: {
        type: DataTypes.DATE,
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
    }
  );

  return restoSections
};
