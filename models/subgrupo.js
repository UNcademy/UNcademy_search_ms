const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class subGrupo extends Model{
        static associate(models) {
            subGrupo.belongsTo(models.Grupo)
        }
    }
    subGrupo.init({
        identificadorSubGrupo: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        docenteEspecifico: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        salon: {
            type: DataTypes.STRING,
            },
        hora: {
            type: DataTypes.STRING,
            },
        dias: {
            type: DataTypes.STRING,
            },
    }, {
        sequelize,
        modelName: 'subGrupo',
        Freezetablename: true,
        timestamps: false
      })

    return subGrupo
}