'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aptitudes_ofertas extends Model {

    static associate(models) {
      aptitudes_ofertas.belongsTo(models.ofertas, {
        as: 'Oferta',
        foreignKey: 'fk_id_oferta',
      });
      aptitudes_ofertas.belongsTo(models.aptitudes ,{
        as : 'Aptitudes de oferta',  // nombre de mi relacion
        foreignKey: 'fk_id_aptitud'     // campo con el que voy a igualar
      });
      aptitudes_ofertas.belongsTo(models.idiomas ,{
        as : 'Idioma',  // nombre de mi relacion
        foreignKey: 'fk_id_idioma'     // campo con el que voy a igualar
      });

      aptitudes_ofertas.belongsTo(models.niveles_idiomas ,{
        as : 'Nivel de idioma',  // nombre de mi relacion
        foreignKey: 'fk_id_nivel'     // campo con el que voy a igualar
      });

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