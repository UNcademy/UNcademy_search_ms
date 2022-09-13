'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Facultads', [{
      id:1,
      nombre: "Ingeniería",
      createdAt: new Date(),
      updatedAt: new Date(),
      SedeId: 1
    },
    {id:2,
      nombre: "Medicina",
      createdAt: new Date(),
      updatedAt: new Date(),
      SedeId: 1
    },
    {id:3,
      nombre: "Ciencias",
      createdAt: new Date(),
      updatedAt: new Date(),
      SedeId: 1
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Facultads', null, {});
  }
};
