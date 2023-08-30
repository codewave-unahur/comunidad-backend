'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Se ejecuta cuando hacemos el seed...
    await queryInterface.bulkInsert('carreras', [
      {
        nombre_carrera: "Tecnicatura en informatica",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre_carrera: "Licenciatura en informatica",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre_carrera: "Tecnicatura en laboratorio",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre_carrera: "Licenciatura en biotecnologia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre_carrera: "Tecnicatura universitaria en gestion ambiental",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre_carrera: "Tecnicatura universitaria en tecnologia de los alimentos",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre_carrera: "Tecnicatura universitaria en viverismo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre_carrera: "Profesorado universitario de letras",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre_carrera: "Profesorado universitario en educacion fisica",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre_carrera: "Profesorado universitario de ingles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre_carrera: "Profesorado universitario de matematica",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre_carrera: "Profesorado universitario de biologia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre_carrera: "Tecnicatura universitaria en programacion",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre_carrera: "Tecnicatura universitaria en redes y operaciones informaticas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre_carrera: "Tecnicatura universitaria en diseño industrial",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    // Esto se ejecuta cuando se de deshace el seed.
    await queryInterface.bulkDelete('carreras', null, {});
  }
};
