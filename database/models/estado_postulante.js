'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class estado_postulantes extends Model {
    static associate(models) {}
  }
  estado_postulantes.init({
    nombre_estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'estado_postulantes',
  });
  return estado_postulantes;
};