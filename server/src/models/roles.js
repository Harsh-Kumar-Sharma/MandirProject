/* eslint-disable */
const { ROLES } = require('../config/tables');

module.exports = (sequelize, DataTypes) => {
  const roles = sequelize.define(
    ROLES,
    {
      id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      role_name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
    }
  );

  roles.associate = function (models) {
    roles.belongsToMany(models.users, {
      through: models.user_role_mappings,
      foreignKey: 'role_id',
      otherKey: 'user_id',
    });
  };

  return roles;
};
