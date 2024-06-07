const { MENU_SUB_CATEGORIES } = require('../config/tables');

module.exports = (sequelize, DataTypes) => {
  const menu_sub_categories = sequelize.define(
    MENU_SUB_CATEGORIES,
    {
      id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      sub_category_name: {
        type: DataTypes.STRING,
      },
      sub_category_description: {
        type: DataTypes.STRING,
      },
      category_id: {
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

  menu_sub_categories.associate = function (models) {
    menu_sub_categories.hasOne(models.menu_items, { foreignKey: 'id' });
  };

  return menu_sub_categories;
};
