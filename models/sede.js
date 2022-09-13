const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Sede extends Model{
        static associate(models) {
            Sede.hasMany(models.Facultad, {
              foreignKey: {
                allowNull: false,
              }
            });
          }
    }
    Sede.init({
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
              args: true,
              msg: "El Nombre de la sede ya se encuentra en uso."
            }
          }
    }, {
        sequelize,
        modelName: 'Sede',
        Freezetablename: true
      })

    return Sede
}