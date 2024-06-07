const { MENU_ITEM_CUSTOMIZATIONS } = require('../config/tables');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    MENU_ITEM_CUSTOMIZATIONS,
    {
      id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      customization_name: {
        type: DataTypes.STRING,
      },
      item_id: {
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
