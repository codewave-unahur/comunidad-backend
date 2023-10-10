'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class idiomas extends Model {
    
    static associate(models) {
      idiomas.hasMany(models.aptitudes_ofertas ,{
        as : 'Idioma',  // nombre de mi relacion
        foreignKey: 'fk_id_idioma'     // campo con el que voy a igualar
      });
    }
  }
  idiomas.init({
    nombre_idioma: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'idiomas',
  });
  return idiomas;
};