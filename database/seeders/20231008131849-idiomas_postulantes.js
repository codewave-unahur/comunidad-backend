'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('idiomas_postulantes', [
      {
        id:1,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_idioma: 19,
        fk_id_postulante: 25647424,
      },
      {
        id:2,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_idioma: 1,
        fk_id_postulante: 25647424,
      },
      {
        id:3,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_idioma: 34,
        fk_id_postulante: 41232451,
      },
      {
        id:4,
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt : '2022-06-05 12:00:00+00',
        fk_id_idioma: 26,
        fk_id_postulante: 41232451,
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('idiomas_postulantes', null, {});
  }
};
