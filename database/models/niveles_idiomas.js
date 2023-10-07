'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class niveles_idiomas extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  niveles_idiomas.init({
    nivel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'niveles_idiomas',
  });
  return niveles_idiomas;
};