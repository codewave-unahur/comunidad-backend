'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('preferencias_ofertas', [
      {
        id:101,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 9,
        fk_id_ofertas: 62,
      },
      {
        id:102,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 1,
        fk_id_ofertas: 63,
      },
      {
        id:103,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 13,
        fk_id_ofertas: 63,
      },
      {
        id:104,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 13,
        fk_id_ofertas: 64,
      },
      {
        id:105,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 7,
        fk_id_ofertas: 65,
      },
      {
        id:106,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 15,
        fk_id_ofertas: 66,
      },
      {
        id:107,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 9,
        fk_id_ofertas: 67,
      },
      {
        id:108,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 13,
        fk_id_ofertas: 68,
      },
      {
        id:109,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 3,
        fk_id_ofertas: 68,
      },
      {
        id:110,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 13,
        fk_id_ofertas: 69,
      },
      {
        id:111,
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
