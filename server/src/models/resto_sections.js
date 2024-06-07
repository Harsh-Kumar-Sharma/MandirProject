const { RESTO_SECTIONS } = require('../config/tables');

module.exports = (sequelize, DataTypes) => {
  const restoSections = sequelize.define(
    RESTO_SECTIONS,
    {
      id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      section_name: {
        type: DataTypes.STRING,
      },
      section_type: {
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

  restoSections.associate = function (models) {
    restoSections.hasMany(models.section_tables, { foreignKey: 'section_id' })
  };

  return restoSections
};
