const db = require('../models')
const SubGrupo = db.subGrupo
const Op = db.Sequelize.Op;


exports.findSubGroupById= async(req, res) =>{
    const id = req.params.id;
    const subgrupo = await SubGrupo.findAll({where:{id: id},
        include: [
            {
                model: db.Grupo,
                required: true,
            }
        ]})
    res.status(200).send(subgrupo)
};

exports.findSubGroupByProfesor= async(req, res) =>{
    const profesor = req.params.profesor;
    const subgrupo = await SubGrupo.findAll({where:{docenteEspecifico: profesor},
        include: [
            {
                model: db.Grupo,
                required: true,
            }
        ]})
    res.status(200).send(subgrupo)
};

exports.findGroupByClassRoom= async(req, res) =>{
    const salon = req.params.salon;
    const subgrupo = await SubGrupo.findAll({where:{salon: salon},
        include: [
            {
                model: db.Grupo,
                required: true,
            }
        ]})
    res.status(200).send(subgrupo)
};

exports.findGroupByHour= async(req, res) =>{
    const hora = req.params.hora;
    const subgrupo = await SubGrupo.findAll({where:{hora: hora},
        include: [
            {
                model: db.Grupo,
                required: true,
            }
        ]})
    res.status(200).send(subgrupo)
};

exports.findGroupByDays= async(req, res) =>{
    const dia = req.params.dia;
    const subgrupo = await SubGrupo.findAll({where:{dias: dia},
        include: [
            {
                model: db.Grupo,
                required: true,
            }
        ]})
    res.status(200).send(subgrupo)
};

exports.findSubGrupoByGrupo= async(req, res) =>{
    const grupoId = req.params.GrupoId;
    const subgrupo = await SubGrupo.findAll({where:{GrupoId: grupoId},
    include: [
        {
            model: db.Grupo,
            required: true,
        }
    ]})
    res.status(200).send(subgrupo)
};