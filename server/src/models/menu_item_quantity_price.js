const { MENU_ITEM_QUANTITY_PRICE } = require('../config/tables');

module.exports = (sequelize, DataTypes) => {
  const menu_item_quantity_price = sequelize.define(
    MENU_ITEM_QUANTITY_PRICE,
    {
      id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      item_id: {
        type: DataTypes.NUMBER,
      },
      quantity: {
        type: DataTypes.STRING,
      },
      unit: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.NUMBER,
      },
      created_at: {
        type: DataTypes.DATE,
      },
      updated_at: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
    }
  );

  return menu_item_quantity_price;
};
