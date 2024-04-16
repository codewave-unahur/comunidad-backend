'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jornadas extends Model {
    static associate(models) {}
  }
  jornadas.init({
    nombre_jornada: DataTypes.STRING,
    detalle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'jornadas',
  });
  return jornadas;
};