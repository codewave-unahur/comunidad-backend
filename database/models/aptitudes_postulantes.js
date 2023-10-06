'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aptitudes_postulantes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      aptitudes_postulantes.belongsTo(models.aptitudes ,{
          as : 'Aptitud',  // nombre de mi relacion
          foreignKey: 'fk_id_aptitud'     // campo con el que voy a igualar
        });
      aptitudes_postulantes.belongsTo(models.postulantes, {
        as: 'Postulante',
        foreignKey: 'fk_id_usuario',
      });  
    }
  }
  aptitudes_postulantes.init({
    fk_id_aptitud: DataTypes.INTEGER,
    fk_id_usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'aptitudes_postulantes',
  });
  return aptitudes_postulantes;
};