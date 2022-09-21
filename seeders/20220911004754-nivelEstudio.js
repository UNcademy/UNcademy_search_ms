'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('NivelEstudios', [{
      id:1,
      nombre: "Pregrado",
    },
    {id:2,
      nombre: "Posgrado/Maestria",
    },
    {id:3,
      nombre: "Doctorado",
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('NivelEstudios', null, {});
  }
};
