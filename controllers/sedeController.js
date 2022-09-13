const db = require('../models')
const Sede = db.Sede



exports.findAllSedes = async(req, res) =>{
    const sedes = await Sede.findAll()
    res.send(sedes)
};

exports.findSedeById= async(req, res) =>{
    const id = req.params.id;
    const sede = await Sede.findAll({where:{id: id}})
    res.status(200).send(sede)
};