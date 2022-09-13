'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('NivelEstudios', [{
      id:1,
      nombre: "Pregrado",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {id:2,
      nombre: "Posgrado/Maestria",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {id:3,
      nombre: "Doctorado",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('NivelEstudios', null, {});
  }
};
