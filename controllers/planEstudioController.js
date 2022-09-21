const db = require('../models')
const PlanEstudio = db.PlanEstudio


exports.findAllPlanEstudio = async(req, res) =>{
    const planEstudio = await PlanEstudio.findAll()
    res.send(planEstudio)
};

exports.findPlanEstudioById= async(req, res) =>{
    const id = req.params.id;
    const planEstudio = await PlanEstudio.findAll({where:{id: id}})
    res.status(200).send(planEstudio)
};

exports.findMateriaByPlanEstudio= async(req, res) =>{
    const id = req.params.id;
    const materia = await PlanEstudio.findAll({attributes: ['nombre', 'FacultadId', 'NivelEstudioId'], where:{id: id},
    include: [
        {
            model: db.Materia,
            required: true,
        }
    ]})
    res.status(200).send(materia)
};
