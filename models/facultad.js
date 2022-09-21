const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Facultad extends Model {
    static associate(models) {
      Facultad.hasMany(models.PlanEstudio, {
        foreignKey: {
          allowNull: false,
        }
      });
    Facultad.belongsTo(models.Sede)
    }
  }
  Facultad.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "El Nombre de la facultad ya se encuentra en uso."
      }
    }
  }, {
    sequelize,
    modelName: 'Facultad',
    Freezetablename: true,
    timestamps: false
  });
  return Facultad;
};