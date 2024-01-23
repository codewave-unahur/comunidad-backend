"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class postulantes extends Model {
    
    static associate(models) {
      // define association here
        postulantes.belongsTo(
          models.usuarios, // modelo al que pertenece
          {
            as: "Usuario", // nombre de mi relacion
            foreignKey: "fk_id_usuario", // campo con el que voy a igualar
          }
        )
        postulantes.belongsTo(
          models.estudios, // modelo al que pertenece
          {
            as: "Estudios", // nombre de mi relacion
            foreignKey: "fk_id_estudios", // campo con el que voy a igualar
          }
        )
        postulantes.belongsTo(
          models.carreras, // modelo al que pertenece
          {
            as: "Carrera", // nombre de mi relacion
            foreignKey: "fk_id_carrera", // campo con el que voy a igualar
          }
        )
        postulantes.belongsTo(
          models.provincias, // modelo al que pertenece
          {
            as: "Provincia", // nombre de mi relacion
            foreignKey: "fk_id_provincia", // campo con el que voy a igualar
          }
        )
        postulantes.belongsTo(
          models.ciudades, // modelo al que pertenece
          {
            as: "Ciudad", // nombre de mi relacion
            foreignKey: "fk_id_ciudad", // campo con el que voy a igualar
          }
        );
        postulantes.hasMany(models.postulaciones, {
          foreignKey: "fk_id_postulante",
          as: "Postulaciones",
        });
        postulantes.hasMany(models.aptitudes_postulantes, {
          foreignKey: "fk_id_usuario",
          as: "Aptitudes",
        });
        postulantes.hasMany(models.idiomas_postulantes, {
          foreignKey: "fk_id_postulante",
          as: "Idiomas",
        });
        postulantes.hasMany(models.preferencias_postulantes, {
          foreignKey: "fk_id_postulante",
          as: "Preferencias",
        });
    }
  }
  postulantes.init(
    {
      tipo_documento: DataTypes.STRING,
      fk_id_usuario: DataTypes.INTEGER,
      fk_id_estudios: DataTypes.INTEGER,
      fk_id_carrera: DataTypes.INTEGER,
      estado: DataTypes.STRING,
      nombre: DataTypes.STRING,
      apellido: DataTypes.STRING,
      genero: DataTypes.STRING,
      discapacidad:{
          type: DataTypes.STRING,
          defaultValue: 'Ninguna'
      },
      nacionalidad: DataTypes.STRING,
      fecha_nac: DataTypes.DATE,
      pais: DataTypes.STRING,
      fk_id_provincia: DataTypes.INTEGER,
      fk_id_ciudad: DataTypes.INTEGER,
      calle: {
          type :DataTypes.STRING,
          defaultValue: " "
      },
      nro: DataTypes.INTEGER,
      piso: {
          type: DataTypes.INTEGER,
          defaultValue: 1
      },
      depto: {
          type:DataTypes.STRING,
          defaultValue:" "
      },
      cp: DataTypes.STRING,
      telefono: {
          type:DataTypes.INTEGER,
          allowNull: true,
          defaultValue: 0
      },
      segundoTelefono: {
         type: DataTypes.INTEGER,
          allowNull: true
      },
      cant_materias:{
          type: DataTypes.STRING,
          defaultValue: '0'
      },
      alumno_unahur: DataTypes.BOOLEAN,
      presentacion: {
          type: DataTypes.TEXT,
          defaultValue: " "
      },
      cv:{
          type: DataTypes.TEXT,
          defaultValue: " "
      },
      foto: DataTypes.TEXT,
      linkedIn: DataTypes.TEXT,
      portfolio: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "postulantes",
    }
  );
  return postulantes;
};
