"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const rubros = [
      {
        id: 1,
        nombre_preferencia: "Administración",
        createdAt: "2022-06-05 12:00:00+00",
        updatedAt: "2022-06-05 12:00:00+00",
      },
      {
        id: 2,
        nombre_preferencia: "Alimentos",
        createdAt: "2022-06-05 12:00:00+00",
        updatedAt: "2022-06-05 12:00:00+00",
      },
      {
        id: 3,
        nombre_preferencia: "Biotecnología",
        createdAt: "2022-06-05 12:00:00+00",
        updatedAt: "2022-06-05 12:00:00+00",
      },
      {
        id: 4,
        nombre_preferencia: "Comunicación / MKT",
        createdAt: "2022-06-05 12:00:00+00",
        updatedAt: "2022-06-05 12:00:00+00",
      },
      {
        id: 5,
        nombre_preferencia: "Diseño Ind.",
        createdAt: "2022-06-05 12:00:00+00",
        updatedAt: "2022-06-05 12:00:00+00",
      },
      {
        id: 6,
        nombre_preferencia: "Educación",
        createdAt: "2022-06-05 12:00:00+00",
        updatedAt: "2022-06-05 12:00:00+00",
      },
      {
        id: 7,
        nombre_preferencia: "Electrica",
        createdAt: "2022-06-05 12:00:00+00",
        updatedAt: "2022-06-05 12:00:00+00",
      }, 
      {
        id: 8,
        nombre_preferencia: "Enfermería",
        createdAt: "2022-06-05 12:00:00+00",
        updatedAt: "2022-06-05 12:00:00+00", 
      },
      {
        id: 9,
        nombre_preferencia: "Informatica",
        createdAt: "2022-06-05 12:00:00+00", 
        updatedAt: "2022-06-05 12:00:00+00",
      },
      {
        id: 10,
        nombre_preferencia: "Kinesiología",
        createdAt: "2022-06-05 12:00:00+00",
        updatedAt: "2022-06-05 12:00:00+00",
      },
      {
        id: 11,
        nombre_preferencia: "Logística",
        createdAt: "2022-06-05 12:00:00+00", 
        updatedAt: "2022-06-05 12:00:00+00", 
      },
      {
        id: 12,
        nombre_preferencia: "Médicos",
        createdAt: "2022-06-05 12:00:00+00", 
        updatedAt: "2022-06-05 12:00:00+00",
      },
      {
        id: 13,
        nombre_preferencia: "Química",
        createdAt: "2022-06-05 12:00:00+00", 
        updatedAt: "2022-06-05 12:00:00+00",
      },
      {
        id: 14,
        nombre_preferencia: "Soldadura/Tornería",
        createdAt: "2022-06-05 12:00:00+00", 
        updatedAt: "2022-06-05 12:00:00+00",
      },
      {
        id: 15,
        nombre_preferencia: "Viverismo",
        createdAt: "2022-06-05 12:00:00+00", 
        updatedAt: "2022-06-05 12:00:00+00",
      },
      {
        id: 16,
        nombre_preferencia: "Ventas",
        createdAt: "2022-06-05 12:00:00+00", 
        updatedAt: "2022-06-05 12:00:00+00",
      }
    ];

    await queryInterface.bulkInsert("preferencias", rubros, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("preferencias", null, {});
  },
};
