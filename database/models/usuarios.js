'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    static associate(models) {
      usuarios.belongsTo(models.grupos
      ,{
        as : 'Grupos',
        foreignKey: 'fk_id_grupo'
      })
    }
  }
  usuarios.init({
    //id_usuario: DataTypes.INTEGER,
    fk_id_grupo: DataTypes.INTEGER,
    usuario: DataTypes.STRING,
    password: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'usuarios',
  });
  return usuarios;
};