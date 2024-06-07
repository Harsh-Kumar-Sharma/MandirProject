const { SHIFTS } = require('../config/tables');

module.exports = (sequelize, DataTypes) => {
  const restoSections = sequelize.define(
    SHIFTS,
    {
      id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      shift_name: {
        type: DataTypes.STRING,
      },
      start_time: {
        type: DataTypes.STRING,
      },
      end_time: {
        type: DataTypes.STRING,
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
