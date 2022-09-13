const db = require('../models')
const Facultad = db.Facultad


exports.findAllFacultades = async(req, res) =>{
    const facultad = await Facultad.findAll()
    res.send(facultad)
};

exports.findFacultadById= async(req, res) =>{
    const id = req.params.id;
    const facultad = await Facultad.findAll({where:{id: id}})
    res.status(200).send(facultad)
};
