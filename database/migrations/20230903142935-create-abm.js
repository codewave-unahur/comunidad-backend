'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('abm', {
      id_abm_usuario: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_usuario_mod: {
        type: Sequelize.INTEGER,
      },
      motivo: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('abm');
  },
};