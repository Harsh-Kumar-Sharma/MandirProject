/* eslint-disable */
const { LOGINS } = require('../config/tables');

module.exports = (sequelize, DataTypes) => {
  const logins = sequelize.define(
    LOGINS,
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      is_logged_in: {
        type: DataTypes.BOOLEAN,
      },
      password: {
        type: DataTypes.STRING,
      },
      user_id: {
        type: DataTypes.NUMBER,
      },
      status: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
    }
  );

  logins.associate = function (models) {
    logins.belongsTo(models.users, { foreignKey: 'user_id' });
  };

  return logins;
};
