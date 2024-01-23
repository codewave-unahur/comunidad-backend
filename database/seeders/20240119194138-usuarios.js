
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const usuarios = [

      {
        id: 1,
        fk_id_grupo: 3,
        usuario: 'admin@unahur.edu.ar',
        password: '$2b$10$0w5QCKjGuwAXmNBCNGXjD.dm3Hx6/B4tmwGQbe2mdufpocRnkRASG',
        estado: 't',
        createdAt: '2022-08-23 00:52:55.693+00',
        updatedAt: '2022-08-23 00:52:55.693+00',
      },

    ];

    await queryInterface.bulkInsert('usuarios', usuarios, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  },
};