const { KOT_STATIONS } = require('../config/tables');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    KOT_STATIONS,
    {
      id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      station_name: {
        type: DataTypes.STRING,
      },
      station_type: {
        type: DataTypes.STRING,
      },
      printer_id: {
        type: DataTypes.NUMBER,
      },
      kds_id: {
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
};
