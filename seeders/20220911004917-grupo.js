'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Grupos', [{
      id:1,
      numeroGrupo: 1,
      cuposDisponibles: 15,
      docenteTitular: "Sandra Liliana Rojas Martinez",
      semestre: "2022-II",


      MateriumId: 1,
    },
    {id:2,
      numeroGrupo: 11,
      cuposDisponibles: 10,
      docenteTitular: "Elizabeth Leon Guzman",
      semestre: "2022-II",


      MateriumId: 1,
    },
    {id:3,
      numeroGrupo: 4,
      cuposDisponibles: 12,
      docenteTitular: "Andres Rene Gutierrez Tiuso",
      semestre: "2022-II",


      MateriumId: 1,
    },
    {id:4,
      numeroGrupo: 1,
      cuposDisponibles: 12,
      docenteTitular: "Jorge Enrique Amaya Cala",
      semestre: "2022-II",


      MateriumId: 2,
    },
    {id:5,
      numeroGrupo: 2,
      cuposDisponibles: 25,
      docenteTitular: "Oscar Agudelo Rojas",
      semestre: "2022-II",


      MateriumId: 3,
    },
    {id:6,
      numeroGrupo: 1,
      cuposDisponibles: 10,
      docenteTitular: "Tito Florez Calderon",
      semestre: "2022-II",


      MateriumId: 4,
    },
    {id:7,
      numeroGrupo: 8,
      cuposDisponibles: 1,
      docenteTitular: "Edgar Miguel Vargas Chaparro",
      semestre: "2022-II",


      MateriumId: 5,
    },
    {id:8,
      numeroGrupo: 2,
      cuposDisponibles: 3,
      docenteTitular: "Leonardo Enrique Bermeo Clavijo",
      semestre: "2022-II",


      MateriumId: 6,
    },
    {id:9,
      numeroGrupo: 3,
      cuposDisponibles: 0,
      docenteTitular: "JAN BACCA RODRIGUEZ",
      semestre: "2022-II",


      MateriumId: 7,
    },
    {id:10,
      numeroGrupo: 2,
      cuposDisponibles: 4,
      docenteTitular: "Ubaldo Garcia Zaragoza",
      semestre: "2022-II",


      MateriumId: 8,
    },
    {id:11,
      numeroGrupo: 1,
      cuposDisponibles: 20,
      docenteTitular: "Ricardo Emiro Ramirez Heredia",
      semestre: "2022-II",


      MateriumId: 9,
    },
    {id:12,
      numeroGrupo: 2,
      cuposDisponibles: 30,
      docenteTitular: "Jorge Enrique Rodriguez Manrique",
      semestre: "2022-II",


      MateriumId: 10,
    },
    {id:13,
      numeroGrupo: 2,
      cuposDisponibles: 25,
      docenteTitular: "Fanny Andrea Rojas Florez",
      semestre: "2022-II",


      MateriumId: 11,
    },
    {id:14,
      numeroGrupo: 5,
      cuposDisponibles: 30,
      docenteTitular: "Rene Alexander Soto Perez",
      semestre: "2022-II",


      MateriumId: 12,
    },
    {id:15,
      numeroGrupo: 2,
      cuposDisponibles: 30,
      docenteTitular: "Sandra Milena Tellez Gutierrez",
      semestre: "2022-II",


      MateriumId: 13,
    },
    {id:16,
      numeroGrupo: 2,
      cuposDisponibles: 30,
      docenteTitular: "Eliseo Gomez Moreno",
      semestre: "2022-II",


      MateriumId: 14,
    },
    {id:17,
      numeroGrupo: 1,
      cuposDisponibles: 100,
      docenteTitular: "Sandra Consuelo Henao Riveros",
      semestre: "2022-II",


      MateriumId: 15,
    },
    {id:18,
      numeroGrupo: 1,
      cuposDisponibles: 30,
      docenteTitular: "Luz Helena Aranzalez Ramirez",
      semestre: "2022-II",


      MateriumId: 16,
    },
    {id:19,
      numeroGrupo: 3,
      cuposDisponibles: 25,
      docenteTitular: "Norman Giovanni Apraez Ippolito",
      semestre: "2022-II",


      MateriumId: 17,
    },
    {id:20,
      numeroGrupo: 5,
      cuposDisponibles: 30,
      docenteTitular: "Rocio Robledo Martinez",
      semestre: "2022-II",


      MateriumId: 18,
    },
    {id:21,
      numeroGrupo: 1,
      cuposDisponibles: 50,
      docenteTitular: "Jesus Alercio Ortega Bolanos",
      semestre: "2022-II",


      MateriumId: 19,
    },
    {id:22,
      numeroGrupo: 1,
      cuposDisponibles: 35,
      docenteTitular: "Catalina Ascanio Noreña",
      semestre: "2022-II",


      MateriumId: 20,
    },
    {id:23,
      numeroGrupo: 1,
      cuposDisponibles: 120,
      docenteTitular: "Jorge Eduardo Caminos Pinzon",
      semestre: "2022-II",


      MateriumId: 21,
    },
    {id:24,
      numeroGrupo: 1,
      cuposDisponibles: 50,
      docenteTitular: "Rocio Robledo Martinez",
      semestre: "2022-II",


      MateriumId: 22,
    },
    {id:25,
      numeroGrupo: 3,
      cuposDisponibles: 30,
      docenteTitular: "Herney Fernando Ruiz Vallejo",
      semestre: "2022-II",


      MateriumId: 23,
    },
    {id:26,
      numeroGrupo: 3,
      cuposDisponibles: 30,
      docenteTitular: "Fernando Pio De La Hoz Restrepo",
      semestre: "2022-II",


      MateriumId: 24,
    },
    {id:27,
      numeroGrupo: 13,
      cuposDisponibles: 30,
      docenteTitular: "Luis Antonio Herrera Perez",
      semestre: "2022-II",


      MateriumId: 25,
    },
    {id:28,
      numeroGrupo: 1,
      cuposDisponibles: 30,
      docenteTitular: "Carmen Aleida Fernandez Moreno",
      semestre: "2022-II",


      MateriumId: 26,
    },
    {id:29,
      numeroGrupo: 1,
      cuposDisponibles: 30,
      docenteTitular: "Carmen Aleida Fernandez Moreno",
      semestre: "2022-II",


      MateriumId: 27,
    },
    {id:30,
      numeroGrupo: 1,
      cuposDisponibles: 30,
      docenteTitular: "Imma Quitzel Caicedo Molina",
      semestre: "2022-II",


      MateriumId: 28,
    },
    {id:31,
      numeroGrupo: 1,
      cuposDisponibles: 30,
      docenteTitular: "Sandra Elizabeth Piñeros Ortiz",
      semestre: "2022-II",


      MateriumId: 29,
    },
    {id:32,
      numeroGrupo: 1,
      cuposDisponibles: 30,
      docenteTitular: "Carlos Guillermo Paramo Bonilla",
      semestre: "2022-II",


      MateriumId: 30,
    },
    {id:33,
      numeroGrupo: 1,
      cuposDisponibles: 30,
      docenteTitular: "Jose Luis Ramirez Ramirez",
      semestre: "2022-II",


      MateriumId: 31,
    },
    {id:34,
      numeroGrupo: 1,
      cuposDisponibles: 30,
      docenteTitular: "Francisco Albeiro Gomez Jaramillo",
      semestre: "2022-II",


      MateriumId: 32,
    },
    {id:35,
      numeroGrupo: 2,
      cuposDisponibles: 25,
      docenteTitular: "Jhon Morales Aponte",
      semestre: "2022-II",


      MateriumId: 33,
    },
    {id:36,
      numeroGrupo: 2,
      cuposDisponibles: 40,
      docenteTitular: "Pedro Hernan Zambrano Ramirez",
      semestre: "2022-II",


      MateriumId: 34,
    },
    {id:37,
      numeroGrupo: 1,
      cuposDisponibles: 40,
      docenteTitular: "Francisco Albeiro Gomez Jaramillo",
      semestre: "2022-II",


      MateriumId: 35,
    },
    {id:38,
      numeroGrupo: 1,
      cuposDisponibles: 30,
      docenteTitular: "Yobani Mejia Barbosa",
      semestre: "2022-II",


      MateriumId: 36,
    },
    {id:39,
      numeroGrupo: 3,
      cuposDisponibles: 50,
      docenteTitular: "Arcenio Pecha Castiblanco",
      semestre: "2022-II",


      MateriumId: 37,
    },
    {id:40,
      numeroGrupo: 2,
      cuposDisponibles: 30,
      docenteTitular: "Juan Pablo Beltrán Almeida",
      semestre: "2022-II",


      MateriumId: 38,
    },
    {id:41,
      numeroGrupo: 1,
      cuposDisponibles: 40,
      docenteTitular: "ALEXANDER CANEVA RINCON",
      semestre: "2022-II",


      MateriumId: 39,
    },
    {id:42,
      numeroGrupo: 1,
      cuposDisponibles: 40,
      docenteTitular: "Ruben Dario Guevara Gonzalez",
      semestre: "2022-II",


      MateriumId: 40,
    },
    {id:43,
      numeroGrupo: 2,
      cuposDisponibles: 30,
      docenteTitular: "Ruben Dario Guevara Gonzalez",
      semestre: "2022-II",


      MateriumId: 40,
    },
    {id:44,
      numeroGrupo: 1,
      cuposDisponibles: 40,
      docenteTitular: "Yenny Carolina Ramirez Suarez",
      semestre: "2022-II",


      MateriumId: 41,
    },
    {id:45,
      numeroGrupo: 1,
      cuposDisponibles: 30,
      docenteTitular: " Edilberto Cepeda Cuervo",
      semestre: "2022-II",


      MateriumId: 42,
    },
    {id:46,
      numeroGrupo: 1,
      cuposDisponibles: 40,
      docenteTitular: "Viswanathan Arunachalam",
      semestre: "2022-II",


      MateriumId: 43,
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Grupos', null, {});
  }
};
