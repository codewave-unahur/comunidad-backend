'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aptitudes_ofertas extends Model {

    static associate(models) {
      // define association here
    }
  }
  aptitudes_ofertas.init({
    fk_id_aptitud: DataTypes.INTEGER,
    fk_id_oferta: DataTypes.INTEGER,
    fk_id_idioma: DataTypes.INTEGER,
    fk_id_nivel: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'aptitudes_ofertas',
  });
  return aptitudes_ofertas;
};