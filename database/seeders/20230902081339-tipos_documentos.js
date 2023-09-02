'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tipos_documentos', [
      {
        id: 1,
        tipo_documento: 'DNI',
        createdAt: new Date('2022-06-05 12:00:00+00'),
        updatedAt: new Date('2022-06-05 12:00:00+00'),
      },
      {
        id: 2,
        tipo_documento: 'PASAPORTE',
        createdAt: new Date('2022-06-05 12:00:00+00'),
        updatedAt: new Date('2022-06-05 12:00:00+00'),
      },
      {
        id: 3,
        tipo_documento: 'LC',
        createdAt: new Date('2022-06-05 12:00:00+00'),
        updatedAt: new Date('2022-06-05 12:00:00+00'),
      },
      {
        id: 4,
        tipo_documento: 'LE',
        createdAt: new Date('2022-06-05 12:00:00+00'),
        updatedAt: new Date('2022-06-05 12:00:00+00'),
      },
      // Agregar más objetos aquí...
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tipos_documentos', null, {});
  },
};
