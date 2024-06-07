const { MENU_CATEGORIES } = require('../config/tables');

module.exports = (sequelize, DataTypes) => {
  const menu_categories = sequelize.define(
    MENU_CATEGORIES,
    {
      id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      category_name: {
        type: DataTypes.STRING,
      },
      category_description: {
        type: DataTypes.STRING,
      },
      menu_id: {
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

  menu_categories.associate = function (models) {
    menu_categories.hasOne(models.menu_items, { foreignKey: 'id' });
  };

  return menu_categories;
};
