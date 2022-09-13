const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class NivelEstudio extends Model{ 
        static associate(models) {
            NivelEstudio.hasMany(models.PlanEstudio, {
                foreignKey: {
                  allowNull: false,
                }
              });
        }
    }
    NivelEstudio.init({
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
              args: true,
              msg: "El Nombre de la NivelEstudio ya se encuentra en uso."
            }
          }
    }, {
        sequelize,
        modelName: 'NivelEstudio',
        Freezetablename: true
      })

    return NivelEstudio
}