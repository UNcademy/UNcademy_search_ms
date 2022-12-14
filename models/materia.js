const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Materia extends Model{
        static associate(models) {
            Materia.hasMany(models.Grupo, {
                foreignKey: {
                  allowNull: false,
                }
              });
            Materia.belongsToMany(models.PlanEstudio, {through: 'PlanEstudioMateria'})
        }

    }
    Materia.init({
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
              args: true,
              msg: "El Nombre de la Materia ya se encuentra en uso."
            }
            },
        codigoMateria: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
              args: true,
              msg: "El codigo de la Materia ya se encuentra en uso."
            }
            },
        creditos: {
            type: DataTypes.INTEGER,
            allowNull: false
            },
        cupos: {
            type: DataTypes.INTEGER,
            allowNull: false
            },
        tipologia: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        descripcion: {
            type: DataTypes.STRING,
            },
        prerequisitos: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        esNumerico: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            },
    }, {
        sequelize,
        modelName: 'Materia',
        Freezetablename: true,
        timestamps: false
      })

    return Materia
}