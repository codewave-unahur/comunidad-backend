"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("postulantes", {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING,
      },
      apellido: {
        type: Sequelize.STRING,
      },
      genero: {
        type: Sequelize.STRING,
      },
      discapacidad:{
        type: Sequelize.STRING,
      },
      estado:{
        type: Sequelize.STRING
      },
      nacionalidad: {
        type: Sequelize.STRING,
      },
      fecha_nac: {
        type: Sequelize.DATE,
      },
      pais: {
        type: Sequelize.STRING,
      },
      tipo_documento: {
        type: Sequelize.STRING,
      },
      fk_id_provincia: {
        type: Sequelize.INTEGER,
      },
      fk_id_ciudad: {
        type: Sequelize.INTEGER,
      },
      calle: {
        type: Sequelize.STRING,
      },
      nro: {
        type: Sequelize.INTEGER,
      },
      piso: {
        type: Sequelize.INTEGER,
      },
      depto: {
        type: Sequelize.STRING,
      },
      cp: {
        type: Sequelize.STRING,
      },
      telefono: {
        type: Sequelize.INTEGER,
      },
      segundoTelefono:{
        type: Sequelize.INTEGER,
      },
      cant_materias: {
        type: Sequelize.STRING,
      },
      alumno_unahur: {
        type: Sequelize.BOOLEAN,
      },
      presentacion: {
        type: Sequelize.TEXT,
      },
      cv: {
        type: Sequelize.TEXT,
      },
      foto: {
        type: Sequelize.TEXT,
      },
      linkedIn: {
        type: Sequelize.TEXT,
      },
      portfolio: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("postulantes");
  },
};
