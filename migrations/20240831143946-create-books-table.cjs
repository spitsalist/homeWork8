'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Book', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false,
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false,
    },
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('book');
    
  }
}
