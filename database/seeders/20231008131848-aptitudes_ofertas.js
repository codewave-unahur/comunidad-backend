'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('aptitudes_ofertas', [
      {
        id:1,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_aptitud: 11,
        fk_id_oferta: 66,
      },
      {
        id:2,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_aptitud: 18,
        fk_id_oferta: 61,
      },
      {
        id:3,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_aptitud: 6,
        fk_id_oferta: 65,
      },
      {
        id:4,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_aptitud: 7,
        fk_id_oferta: 65,
      },
      {
        id:5,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_aptitud: 5,
        fk_id_oferta: 62,
      },
      {
        id:6,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_aptitud: 4,
        fk_id_oferta: 63,
      },
      {
        id:7,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_aptitud: 15,
        fk_id_oferta: 60,
      },
      {
        id:8,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_aptitud: 14,
        fk_id_oferta: 64,
      },
      {
        id:9,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_aptitud: 18,
        fk_id_oferta: 69,
      },
      {
        id:10,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_aptitud: 1,
        fk_id_oferta: 67,
      },
      {
        id:11,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_aptitud: 12,
        fk_id_oferta: 68,
      },
      {
        id:12,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_aptitud: 17,
        fk_id_oferta: 70,
      },
      {
        id:13,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_aptitud: 6,
        fk_id_oferta: 71,
      },
      {
        id:14,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_aptitud: 1,
        fk_id_oferta: 72,
      },
      {
        id:15,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_aptitud: 2,
        fk_id_oferta: 72,
      },
      {
        id:16,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_aptitud: 3,
        fk_id_oferta: 72,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('aptitudes_ofertas', null, {});
  }
};
