'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('preferencias_ofertas', [
      {
        id:2,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 4,
        fk_id_ofertas: 62,
      },
      {
        id:3,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 3,
        fk_id_ofertas: 62,
      },
      {
        id:4,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 2,
        fk_id_ofertas: 63,
      },
      {
        id:5,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 1,
        fk_id_ofertas: 63,
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('preferencias_ofertas', null, {});
  }
};
