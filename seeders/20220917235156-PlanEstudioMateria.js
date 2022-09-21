'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('PlanEstudioMateria', [{
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:1,
      PlanEstudioId: 1,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:2,
      PlanEstudioId: 1,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:3,
      PlanEstudioId: 1,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:4,
      PlanEstudioId: 1,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:5,
      PlanEstudioId: 1,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:5,
      PlanEstudioId: 2,
    },//
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:6,
      PlanEstudioId: 2,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:7,
      PlanEstudioId: 2,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:8,
      PlanEstudioId: 2,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:9,
      PlanEstudioId: 2,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:10,
      PlanEstudioId: 3,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:11,
      PlanEstudioId: 3,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:12,
      PlanEstudioId: 3,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:13,
      PlanEstudioId: 3,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:14,
      PlanEstudioId: 3,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:15,
      PlanEstudioId: 4,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:16,
      PlanEstudioId: 4,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:17,
      PlanEstudioId: 4,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:18,
      PlanEstudioId: 4,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:19,
      PlanEstudioId: 4,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:20,
      PlanEstudioId: 4,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:21,
      PlanEstudioId: 4,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:22,
      PlanEstudioId: 4,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:23,
      PlanEstudioId: 4,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:24,
      PlanEstudioId: 4,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:25,
      PlanEstudioId: 4,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:26,
      PlanEstudioId: 4,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:26,
      PlanEstudioId: 5,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:27,
      PlanEstudioId: 5,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:28,
      PlanEstudioId: 5,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:29,
      PlanEstudioId: 5,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:30,
      PlanEstudioId: 5,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:31,
      PlanEstudioId: 6,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:32,
      PlanEstudioId: 6,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:33,
      PlanEstudioId: 6,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:34,
      PlanEstudioId: 6,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:35,
      PlanEstudioId: 6,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:36,
      PlanEstudioId: 7,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:37,
      PlanEstudioId: 7,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:38,
      PlanEstudioId: 7,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:39,
      PlanEstudioId: 7,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:40,
      PlanEstudioId: 7,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:41,
      PlanEstudioId: 8,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:42,
      PlanEstudioId: 8,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:43,
      PlanEstudioId: 8,
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('PlanEstudioMateria', null, {});
  }
};
