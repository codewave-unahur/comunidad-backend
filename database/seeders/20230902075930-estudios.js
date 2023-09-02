'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('estudios', [
      {
        id: 1,
        nombre_estudio: 'Primario',
        estado_estudio: 'Incompleto',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 2,
        nombre_estudio: 'Primario',
        estado_estudio: 'Completo',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 3,
        nombre_estudio: 'Secundario',
        estado_estudio: 'Incompleto',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 4,
        nombre_estudio: 'Secundario',
        estado_estudio: 'Completo',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 5,
        nombre_estudio: 'Terciario',
        estado_estudio: 'Incompleto',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 6,
        nombre_estudio: 'Terciario',
        estado_estudio: 'Completo',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 7,
        nombre_estudio: 'Universitario',
        estado_estudio: 'Incompleto',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 8,
        nombre_estudio: 'Universitario',
        estado_estudio: 'Completo',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('estudios', null, {});
  }
};
