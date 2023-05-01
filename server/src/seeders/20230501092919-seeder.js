'use strict';
const dataExample = require("../data/data.example.json");
const { hash } = require("../helpers/bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Users', dataExample.Users.map(e=>{
      e.createdAt = new Date();
      e.updatedAt = new Date();
      e.password = hash(e.password);
      return e;
    }), {});
    await queryInterface.bulkInsert('Ebooks', dataExample.Ebooks.map(e=>{
      e.createdAt = new Date();
      e.updatedAt = new Date();
      return e;
    }), {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
    await queryInterface.bulkDelete('Ebooks', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  }
};
