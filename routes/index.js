const sedeController = require("../controllers/sedeController.js")
const facultadController = require("../controllers/facultadController.js")
const materiaController = require("../controllers/materiaController.js")
const planEstudioController = require("../controllers/planEstudioController.js")
const grupoController = require("../controllers/grupoController.js")
const subGrupoController = require("../controllers/subGrupoController.js")

module.exports = (app) =>{

    // router
    var router = require('express').Router();

    // sede routers
    router.get('/sedes', sedeController.findAllSedes)
    router.get('/sedeId', sedeController.findSedeById)

    //facultad
    router.get('/facultades', facultadController.findAllFacultades)
    router.get('/facultadId/:id', facultadController.findFacultadById)

    //plan de estudios
    router.get('/planEstudios', planEstudioController.findAllPlanEstudio)
    router.get('/planEstudio/:id', planEstudioController.findPlanEstudioById)
    router.get('/materiaByPlan/:id', planEstudioController.findMateriaByPlanEstudio)

    //materia
    router.get('/materias', materiaController.findAllMaterias)
    router.get('/nombre/:nombre', materiaController.findMateriaByName)
    router.get('/codigo/:codigoMateria', materiaController.findMateriaBycode)
    router.get('/tipologia/:tipologia', materiaController.findMateriaByType)
    router.get('/id/:id', materiaController.findMateriaById)
    router.get('/keyword/:keyword', materiaController.findMateriaByKeyword)


    //grupo
    router.get('/groupByProfesor/:profesor', grupoController.findGroupByProfesor)
    router.get('/groupByNumer/:numero', grupoController.findGroupBynumer)
    router.get('/groupByQuota', grupoController.findGroupByQuota)
    router.put('/updateGroup/:id', grupoController.updateGroup)
    router.get('/groupById/:id', grupoController.findGroupById)

    //SubGrupo
    router.get('/subGrupoById/:id', subGrupoController.findSubGroupById)
    router.get('/subGrupoByProfesor/:profesor', subGrupoController.findSubGroupByProfesor)
    router.get('/subGrupoByClass/:salon', subGrupoController.findGroupByClassRoom)
    router.get('/subGrupoByDay/:dia', subGrupoController.findGroupByDays)
    router.get('/subGrupoByHour/:hora', subGrupoController.findGroupByHour)
    router.get('/subGrupoByGrupoId/:GrupoId', subGrupoController.findSubGrupoByGrupo)

    app.use("/search", router); 
}



