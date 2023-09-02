'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const carreras = [
      {
        id: 1,
        nombre_carrera: 'Tecnicatura en informatica',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 2,
        nombre_carrera: 'Licenciatura en informatica',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 3,
        nombre_carrera: 'Tecnicatura en laboratorio',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 4,
        nombre_carrera: 'Licenciatura en biotecnologia',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 5,
        nombre_carrera: 'Tecnicatura universitaria en gestion ambiental',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 6,
        nombre_carrera: 'Tecnicatura universitaria en tecnologia de los alimentos',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 7,
        nombre_carrera: 'Tecnicatura universitaria en viverismo',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 8,
        nombre_carrera: 'Profesorado universitario de letras',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 9,
        nombre_carrera: 'Profesorado universitario en educacion fisica',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 10,
        nombre_carrera: 'Profesorado universitario de ingles',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 11,
        nombre_carrera: 'Profesorado universitario de matematica',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 12,
        nombre_carrera: 'Profesorado universitario de biologia',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 13,
        nombre_carrera: 'Tecnicatura universitaria en programacion',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 14,
        nombre_carrera: 'Tecnicatura universitaria en redes y operaciones informaticas',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 15,
        nombre_carrera: 'Tecnicatura universitaria en diseño industrial',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
    ];

    await queryInterface.bulkInsert('carreras', carreras, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('carreras', null, {});
  },
};
