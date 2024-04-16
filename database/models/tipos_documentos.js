'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipos_documentos extends Model {
    static associate(models) {}
  }
  tipos_documentos.init({
    tipo_documento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tipos_documentos',
  });
  return tipos_documentos;
};