'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tournaments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      course_id: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      venue: {
        type: Sequelize.STRING
      },
      bet_amount: {
        type: Sequelize.DECIMAL
      },
      winner: {
        type: Sequelize.STRING
      },
      no_of_players: {
        type: Sequelize.INTEGER
      },
      no_of_rounds: {
        type: Sequelize.INTEGER
      },
      types_of_holes: {
        type: Sequelize.INTEGER
      },
      start_date: {
        type: Sequelize.STRING
      },
      end_date: {
        type: Sequelize.STRING
      },
      registration_start_date: {
        type: Sequelize.STRING
      },
      registration_end_date: {
        type: Sequelize.STRING
      },
      max_players: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tournaments');
  }
};