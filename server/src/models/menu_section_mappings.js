const { MENU_SECTION_MAPPINGS } = require('../config/tables');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    MENU_SECTION_MAPPINGS,
    {
      id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      section_id: {
        type: DataTypes.NUMBER,
      },
      menu_id: {
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
