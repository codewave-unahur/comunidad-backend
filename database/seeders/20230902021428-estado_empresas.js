'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const estadosEmpresas = [
      {
        id: 1,
        nombre_estado: 'activo',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 2,
        nombre_estado: 'observado',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 3,
        nombre_estado: 'baja',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
    ];

    await queryInterface.bulkInsert('estado_empresas', estadosEmpresas, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('estado_empresas', null, {});
  },
};
