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
