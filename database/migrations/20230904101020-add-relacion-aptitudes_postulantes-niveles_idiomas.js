'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'aptitudes_postulantes', 
      'fk_id_nivel', 
      {
        type: Sequelize.INTEGER,
        //allowNull: false,
      references: {
        model: 'niveles_idiomas', // Nombre de la tabla que se referencia (en minúsculas y en plural)
        key: 'id',       // Columna que se referencia en la tabla "grupos"
      },
      onUpdate: 'CASCADE', // Opcional: Define el comportamiento de actualización en cascada
      onDelete: 'CASCADE', // Opcional: Define el comportamiento de eliminación en cascada
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('aptitudes_postulantes', 'fk_id_nivel');
  }
};