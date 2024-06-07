const { MENU_ITEMS } = require('../config/tables');

module.exports = (sequelize, DataTypes) => {
  const menu_items = sequelize.define(
    MENU_ITEMS,
    {
      id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      category_id: {
        type: DataTypes.NUMBER,
      },
      sub_category_id: {
        type: DataTypes.NUMBER,
      },
      type: {
        type: DataTypes.STRING,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
      },
      sku: {
        type: DataTypes.STRING,
      },
      recipe_id: {
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

  menu_items.associate = function (models) {
    menu_items.hasMany(models.menu_item_quantity_price, { foreignKey: 'item_id' });
    menu_items.belongsTo(models.menu_categories, { foreignKey: 'category_id' });
    menu_items.belongsTo(models.menu_sub_categories, { foreignKey: 'sub_category_id' });
  };

  return menu_items;
};
