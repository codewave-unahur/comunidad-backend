'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('idiomas', [
      {
        id: 1,
        nombre_idioma: 'Español',
        nivel:"Bajo",
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 2,
        nombre_idioma: 'Español',
        nivel:"Intermedio",
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 3,
        nombre_idioma: 'Español',
        nivel:"Alto",
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 4,
        nombre_idioma: 'Inglés',
        nivel:"Bajo",
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 5,
        nombre_idioma: 'Inglés',
        nivel:"Intermedio",
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 6,
        nombre_idioma: 'Inglés',
        nivel:"Alto",
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 7,
        nombre_idioma: 'Portugués',
        nivel:"Bajo",
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 8,
        nombre_idioma: 'Portugués',
        nivel:"Intermedio",
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 9,
        nombre_idioma: 'Portugués',
        nivel:"Alto",
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 10,
        nombre_idioma: 'Francés',
        nivel:"Bajo",
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 11,
        nombre_idioma: 'Francés',
        nivel:"Intermedio",
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 12,
        nombre_idioma: 'Francés',
        nivel:"Alto",
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 13,
        nombre_idioma: 'Alemán',
        nivel:"Bajo",
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 14,
        nombre_idioma: 'Alemán',
        nivel:"Intermedio",
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 15,
        nombre_idioma: 'Alemán',
        nivel:"Alto",
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('idiomas', null, {});
  }
};
