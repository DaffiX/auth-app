'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Add the 'firstName' and 'lastName' columns to the 'users' table
    await queryInterface.addColumn('users', 'firstName', {
      type: Sequelize.STRING,
      allowNull: true, // You can set this to false if 'firstName' is required
    });

    await queryInterface.addColumn('users', 'lastName', {
      type: Sequelize.STRING,
      allowNull: true, // You can set this to false if 'lastName' is required
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove the 'firstName' and 'lastName' columns from the 'users' table
    await queryInterface.removeColumn('users', 'firstName');
    await queryInterface.removeColumn('users', 'lastName');
  }
};
