'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Sedes', [{
      id:1,
      nombre: "Bogotá",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {id:2,
      nombre: "Medellín",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {id:3,
      nombre: "Manizales",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Sedes', null, {});
  }
};
