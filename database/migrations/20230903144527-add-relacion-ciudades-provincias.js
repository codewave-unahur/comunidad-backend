'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'ciudades', 
      'fk_id_provincia', 
      {
        type: Sequelize.INTEGER,
        //allowNull: false,
      references: {
        model: 'provincias', // Nombre de la tabla que se referencia (en minúsculas y en plural)
        key: 'id',       // Columna que se referencia en la tabla "grupos"
      },
      onUpdate: 'CASCADE', // Opcional: Define el comportamiento de actualización en cascada
      onDelete: 'CASCADE', // Opcional: Define el comportamiento de eliminación en cascada
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('ciudades', 'fk_id_provincia');
  }
};
