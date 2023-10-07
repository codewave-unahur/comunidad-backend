'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class idiomas extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  idiomas.init({
    nombre_idioma: DataTypes.STRING,
    nivel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'idiomas',
  });
  return idiomas;
};