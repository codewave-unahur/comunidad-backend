'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class niveles_idiomas extends Model {
    static associate(models) {
      niveles_idiomas.hasMany(models.aptitudes_ofertas ,{
        as : 'Nivel de idioma',  // nombre de mi relacion
        foreignKey: 'fk_id_nivel'     // campo con el que voy a igualar
      });
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