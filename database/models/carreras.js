'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carreras extends Model {
    static associate(models) {}
  }
  carreras.init({
    nombre_carrera: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'carreras',
  });
  return carreras;
};