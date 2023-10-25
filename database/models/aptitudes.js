'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aptitudes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      aptitudes.hasMany(models.aptitudes_postulantes// modelo al que pertenece
      ,{
        as : 'Aptitudes del postulante',  // nombre de mi relacion
        foreignKey: 'fk_id_aptitud'     // campo con el que voy a igualar
      }
    )
    }
  }
  aptitudes.init({
    nombre_aptitud: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'aptitudes',
  });
  return aptitudes;
};