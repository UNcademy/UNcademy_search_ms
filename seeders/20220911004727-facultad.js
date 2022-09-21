'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Facultads', [{
      id:1,
      nombre: "Ingeniería",
      SedeId: 1
    },
    {id:2,
      nombre: "Medicina",
      SedeId: 1
    },
    {id:3,
      nombre: "Ciencias",
      SedeId: 1
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Facultads', null, {});
  }
};
