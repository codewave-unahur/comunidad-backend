'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class estudios extends Model {
    static associate(models) {}
  }
  estudios.init({
    nombre_estudio: DataTypes.STRING,
    estado_estudio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'estudios',
  });
  return estudios;
};