'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('aptitudes', [
      {
        id: 1,
        nombre_aptitud: 'Python',
        descripcion: 'Desarrollo en Python',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 2,
        nombre_aptitud: 'NodeJS',
        descripcion: 'Desarrollo en NodeJS',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 3,
        nombre_aptitud: 'ReactJS',
        descripcion: 'Desarrollo en ReactJS',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 4,
        nombre_aptitud: 'Capacidad de liderazgo',
        descripcion: 'Capacidad de liderazgo',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 5,
        nombre_aptitud: 'Comunicación',
        descripcion: 'Comunicación',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 6,
        nombre_aptitud: 'Resolución de problemas',
        descripcion: 'Resolución de problemas',
        createdAt: '2022-06-05 12:00:00+00',
        updatedAt: '2022-06-05 12:00:00+00', 
      },
      {
        id: 7,
        nombre_aptitud: 'Adaptabilidad',
        descripcion: 'Adaptabilidad',
        createdAt: '2022-06-05 12:00:00+00', 
        updatedAt: '2022-06-05 12:00:00+00', 
      },
      {
        id: 8,
        nombre_aptitud: 'Autogestión',
        descripcion: 'Autogestión',
        createdAt: '2022-06-05 12:00:00+00', 
        updatedAt: '2022-06-05 12:00:00+00', 
      },
     {
      id: 9,
      nombre_aptitud: 'Resiliencia',
      descripcion: 'Resiliencia',
      createdAt: '2022-06-05 12:00:00+00', 
      updatedAt: '2022-06-05 12:00:00+00',
     },
      {
        id: 10,
        nombre_aptitud: 'Análisis de datos',
        descripcion: 'Análisis de datos',
        createdAt: '2022-06-05 12:00:00+00', 
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 11,
        nombre_aptitud: 'Gestión de Proyectos',
        descripcion: 'Gestión de Proyectos',
        createdAt: '2022-06-05 12:00:00+00', 
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 12,
        nombre_aptitud: 'Higiene y seguridad alimentaria',
        descripcion: 'Higiene y seguridad alimentaria',
        createdAt: '2022-06-05 12:00:00+00', 
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 13,
        nombre_aptitud: 'Ingeniería Genética',
        descripcion: 'Ingeniería Genética',
        createdAt: '2022-06-05 12:00:00+00', 
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 14,
        nombre_aptitud: 'Herramientas de Diseño',
        descripcion: 'Herramientas de Diseño',
        createdAt: '2022-06-05 12:00:00+00', 
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 15,
        nombre_aptitud: 'Automatización',
        descripcion: 'Automatización',
        createdAt: '2022-06-05 12:00:00+00', 
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 16,
        nombre_aptitud: 'Terapia Deportiva',
        descripcion: 'Terapia Deportiva',
        createdAt: '2022-06-05 12:00:00+00', 
        updatedAt: '2022-06-05 12:00:00+00',
      },
      {
        id: 17,
        nombre_aptitud: 'Cadena de Suministro',
        descripcion: 'Cadena de Suministro',
        createdAt: '2022-06-05 12:00:00+00', 
        updatedAt: '2022-06-05 12:00:00+00', 
      },
      {
        id: 18,
        nombre_aptitud: 'Investigación Clínica',
        descripcion: 'Investigación Clínica',
        createdAt: '2022-06-05 12:00:00+00', 
        updatedAt: '2022-06-05 12:00:00+00', 
      },
      {
        id: 19,
        nombre_aptitud: 'Gestión de Cuentas',
        descripcion: 'Gestión de Cuentas',
        createdAt: '2022-06-05 12:00:00+00', 
        updatedAt: '2022-06-05 12:00:00+00', 
      },
      {
        id: 20,
        nombre_aptitud: 'Técnicas de Soldadura',
        descripcion: 'Técnicas de Soldadura',
        createdAt: '2022-06-05 12:00:00+00', 
        updatedAt: '2022-06-05 12:00:00+00', 
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('aptitudes', null, {});
  }
};
