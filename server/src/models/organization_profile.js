const { ORGANIZATION_PROFILE } = require('../config/tables');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    ORGANIZATION_PROFILE,
    {
      id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      organization_name: {
        type: DataTypes.STRING,
      },
      logo: {
        type: DataTypes.STRING,
      },
      license_key: {
        type: DataTypes.STRING,
      },
      location: {
        type: DataTypes.STRING,
      },
      address_1: {
        type: DataTypes.STRING,
      },
      address_2: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      state: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
      zip_code: {
        type: DataTypes.STRING,
      },
      gst: {
        type: DataTypes.STRING,
      },
      phone_no: {
        type: DataTypes.STRING,
      },
      pan: {
        type: DataTypes.STRING,
      },
      language: {
        type: DataTypes.STRING,
      },
      timezone: {
        type: DataTypes.STRING,
      },
      company_id: {
        type: DataTypes.STRING,
      },
      date_format: {
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
};
