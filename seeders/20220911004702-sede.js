'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Sedes', [{
      id:1,
      nombre: "Bogotá",  
    },
    {id:2,
      nombre: "Medellín",
    },
    {id:3,
      nombre: "Manizales"
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Sedes', null, {});
  }
};
