'use strict';

const bcrypt = require("bcrypt");
const bcryptSalt = process.env.BCRYPT_SALT;

const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    static associate(models) {
      usuarios.belongsTo(models.grupos// modelo al que pertenece
      ,{
        as : 'Grupos',  // nombre de mi relacion
        foreignKey: 'fk_id_grupo'     // campo con el que voy a igualar
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

  usuarios.beforeCreate(async (usuario, options) => {
    if (usuario.changed("password")) {
      const hash = await bcrypt.hash(usuario.password, Number(bcryptSalt));
      usuario.password = hash;
    }
  });

  return usuarios;
};