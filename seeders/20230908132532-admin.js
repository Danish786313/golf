'use strict';

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcrypt")
module.exports = {
  async up (queryInterface, Sequelize) {
    let hash = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10)
    await queryInterface.bulkInsert('admins', [{
      name: "Admin",
      email:  process.env.ADMIN_MAIL,
      password: hash,
      created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
      updated_at : Sequelize.literal("CURRENT_TIMESTAMP")
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('admins', null, {});
  }
};
