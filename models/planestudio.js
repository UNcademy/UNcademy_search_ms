const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class PlanEstudio extends Model{
        static associate(models) {
            PlanEstudio.belongsToMany(models.Materia, {through: 'PlanEstudioMateria'})
            PlanEstudio.belongsTo(models.Facultad)
            PlanEstudio.belongsTo(models.NivelEstudio)
        }
    }
    PlanEstudio.init({
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
              args: true,
              msg: "El Nombre de la PlanEstudio ya se encuentra en uso."
            }
          },
        creditosDisOpt: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        creditosDisObl: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        creditosFunOpt: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        creditosFunObl: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        creditosLibElc: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        creditosTraGrado: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'PlanEstudio',
        Freezetablename: true,
        timestamps: false
      })

    return PlanEstudio
}