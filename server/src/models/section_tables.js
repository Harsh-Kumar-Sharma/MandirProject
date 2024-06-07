const { SECTION_TABLES } = require('../config/tables');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    SECTION_TABLES,
    {
      id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      table_name: {
        type: DataTypes.STRING,
      },
      section_id: {
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
