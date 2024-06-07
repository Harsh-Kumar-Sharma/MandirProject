const { USERS } = require('../config/tables');

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    USERS,
    {
      id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
      },
      first_name: {
        type: DataTypes.STRING,
      },

      last_name: {
        type: DataTypes.STRING,
      },
      mobile: {
        type: DataTypes.STRING,
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

  users.associate = function (models) {
    users.hasOne(models.logins, { foreignKey: 'user_id' });
    // users.hasOne(models.user_role_mappings, { foreignKey: 'user_id' });
    users.belongsToMany(models.roles, {
      through: models.user_role_mappings,
      foreignKey: 'user_id',
      otherKey: 'role_id',
    });
  };

  return users;
};
