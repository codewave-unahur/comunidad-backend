'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('preferencias_postulantes', [
      {
        id:101,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 1,
        fk_id_postulante: 25647424, 
      },
      {
        id:102,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 2,
        fk_id_postulante: 25647424,
      },
      {
        id:103,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 3,
        fk_id_postulante: 41232451,
      },
      {
        id:104,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 4,
        fk_id_postulante: 41232451,
      },
      {
        id:105,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_preferencia: 4,
        fk_id_postulante: 12783917,
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('preferencias_postulantes', null, {});
  }
};
