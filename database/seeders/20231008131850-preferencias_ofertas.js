'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('preferencias_ofertas', [
      {
        id:1,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 9,
        fk_id_ofertas: 62,
      },
      {
        id:2,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 1,
        fk_id_ofertas: 63,
      },
      {
        id:3,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 13,
        fk_id_ofertas: 63,
      },
      {
        id:4,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 13,
        fk_id_ofertas: 64,
      },
      {
        id:5,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 7,
        fk_id_ofertas: 65,
      },
      {
        id:6,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 15,
        fk_id_ofertas: 66,
      },
      {
        id:7,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 9,
        fk_id_ofertas: 67,
      },
      {
        id:8,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 13,
        fk_id_ofertas: 68,
      },
      {
        id:9,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 3,
        fk_id_ofertas: 68,
      },
      {
        id:10,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 13,
        fk_id_ofertas: 69,
      },
      {
        id:11,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 3,
        fk_id_ofertas: 69,
      }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('preferencias_ofertas', null, {});
  }
};
