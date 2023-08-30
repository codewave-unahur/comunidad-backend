'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {
        fk_id_grupo: 1,
        usuario: "redbull@redbull.com",
        password: "$2b$10$0T6Ne6.sC0HOzhgStBGe.uESCx15RE5ituNPNgSv.fs3LcW5M3e.q",
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fk_id_grupo: 2,
        usuario: "shell@shell.com",
        password: "$2b$10$eRrpoSWNMe7QbgNIPrVUvOl/KXYkADNXpYeXp6MFb1Yn4DwIjJtBm",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fk_id_grupo: 1,
        usuario: "joelyturrieta@gmail.com",
        password: "$2b$10$pe6NURnRkf8uRtBZd7o2Ve0M2hg/mHtO1CqBFQrA4p6NIyZ7pHI6S",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fk_id_grupo: 1,
        usuario: "sebastian.brandariz@gmail.com",
        password: "$2b$10$Z9JGGftIu6awh61Scjj5.uNZBRURTNIp.wYJxY9A43ENAFqcblqzK",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fk_id_grupo: 1,
        usuario: "aysa@aysa.com",
        password: "$2b$10$RukRvqdc9wIXxWnNXu386OCX1ihL8OhSfUZxJvTFzNA.mo/MnW80.",
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fk_id_grupo: 1,
        usuario: "curryhaskell@gmail.com",
        password: "$2b$10$T3eEA9909umTlLjimURiX.A4MNoJ3RQ9Q05Xk/Dhx8unNWnoyX/0.",
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fk_id_grupo: 1,
        usuario: "pizza@pizza.com",
        password: "$2b$10$93vog5pRS9l/0so0r9NDcepyBKFH9oPmHQ5xD6j6bWgfoCln9cs2S",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fk_id_grupo: 1,
        usuario: "clombardi@gmail.com",
        password: "$2b$10$/aGV1SOjD4E.sIlMcm4auOrXnvtNGa1dgP0L9qXPq22/Q0tfTkC.2",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fk_id_grupo: 3,
        usuario: "admin@unahur.edu.ar",
        password: "$2b$10$0w5QCKjGuwAXmNBCNGXjD.dm3Hx6/B4tmwGQbe2mdufpocRnkRASG",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fk_id_grupo: 2,
        usuario: "bayer@bayer.com",
        password: "$2b$10$PMZLd/oMi18nHLQ9SjG0M.hD7JbdX6hZPXpmhekd3FmMlRUvh3pZu",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fk_id_grupo: 2,
        usuario: "telefonica@telefonica.com",
        password: "$2b$10$/Ch96TdnRiqBw3/NBeOQsOZzYAWHjCmlqJor567HId1SI/6GerjQK",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fk_id_grupo: 1,
        usuario: "empresa1@empresa.com",
        password: "$2b$10$my431b3HlKxPuHoRcCrP9Oje9pCWUo9M8C.k26fcUQU1iLMgwvbAi",
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fk_id_grupo: 1,
        usuario: "msguser@gmail.com",
        password: "$2b$10$9quG6za2EGGhYZm2zWRPs.tv19S1J3cASS4BTOF4EBn5tR//Msb6u",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fk_id_grupo: 1,
        usuario: "cuevasagustin168@gmail.com",
        password: "$2b$10$tW0BvMgE6BISMNPzHhNT/utpnXaSweqdDuFSJZmJ3BV4iWu7PFYwq",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fk_id_grupo: 1,
        usuario: "pabloperez@gmail.com",
        password: "$2b$10$xWgMopGO0qz.iglD/OqZnO3JEd9uCiuE0meuerOeI1i6.2DSHpfhW",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fk_id_grupo: 1,
        usuario: "queso@queso.com",
        password: "$2b$10$gzOLxQPi66fSZ5spwV3jvOn.pi4scIJn9FZ0fH1A/lfO0hglZCks2",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fk_id_grupo: 1,
        usuario: "apple@apple.com",
        password: "$2b$10$nwh/1LqsDSYmLxHLLQLmx.bbI6RxPu1Zjd1WPEnur2AMq0t5IJqYG",
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fk_id_grupo: 1,
        usuario: "nivea@nivea.com",
        password: "$2b$10$FkccNNOSly6A8nxq0ToPqOuzc4WgoCGhujr/Lx4azEuT8WV7Dq8wG",
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fk_id_grupo: 1,
        usuario: "ivorrajosemaria@gmail.com",
        password: "origone151",
        estado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }

  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
