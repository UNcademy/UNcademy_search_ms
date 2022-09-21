const db = require('../models')
const Materia = db.Materia
const Op = db.Sequelize.Op;


exports.findAllMaterias= async(req, res) =>{
    const materia = await Materia.findAll()
    res.send(materia)
};

exports.findMateriaByName= async(req, res) =>{
    const nombre = req.params.nombre;
    const materia = await Materia.findAll({where:{nombre: nombre},
        include: [
            {
                model: db.PlanEstudio,
                required: true,
                include: [
                    {
                        model: db.NivelEstudio,
                        required: true
                    },
                    {
                        model: db.Facultad,
                        required: true,
                        include: {
                            model: db.Sede,
                            required: true
                        }
                    },
                ]
            }
        ]})
    res.status(200).send(materia)
};

exports.findMateriaBycode= async(req, res) =>{
    const codigoMateria = req.params.codigoMateria;
    const materia = await Materia.findAll({where:{codigoMateria: codigoMateria},
        include: [
            {
                model: db.PlanEstudio,
                required: true,
                include: [
                    {
                        model: db.NivelEstudio,
                        required: true
                    },
                    {
                        model: db.Facultad,
                        required: true,
                        include: {
                            model: db.Sede,
                            required: true
                        }
                    },
                ]
            }
        ]})
    res.status(200).send(materia)
};

exports.findMateriaByType= async(req, res) =>{
    const tipologia = req.params.tipologia;
    const materia = await Materia.findAll({where:{tipologia: tipologia},
        include: [
        {
            model: db.PlanEstudio,
            required: true,
            include: [
                {
                    model: db.NivelEstudio,
                    required: true
                },
                {
                    model: db.Facultad,
                    required: true,
                    include: {
                        model: db.Sede,
                        required: true
                    }
                },
            ]
        }
    ]})
    res.status(200).send(materia)
};

exports.findMateriaById= async(req, res) =>{
    const id = req.params.id;
    const materia = await Materia.findAll({where:{id: id},
        include: [
            {
                model: db.PlanEstudio,
                required: true,
                include: [
                    {
                        model: db.NivelEstudio,
                        required: true
                    },
                    {
                        model: db.Facultad,
                        required: true,
                        include: {
                            model: db.Sede,
                            required: true
                        }
                    },
                ]
            }
        ]})
    res.status(200).send(materia)
};

exports.findMateriaByKeyword= async(req, res) =>{
    const keyword = req.params.keyword;
    const materia = await Materia.findAll({where:{
        [Op.or]:[
            {
                nombre: {
                    [Op.like]: `%${keyword}%`
                }
            },
            {
                codigoMateria: {
                    [Op.like]: `%${keyword}%`
                }
            },
            {
                tipologia: {
                    [Op.like]: `%${keyword}%`
                }
            },
            {
                descripcion: {
                    [Op.like]: `%${keyword}%`
                }
            },  
        ]
    },
    include: [
        {
            model: db.PlanEstudio,
            required: true,
            include: [
                {
                    model: db.NivelEstudio,
                    required: true
                },
                {
                    model: db.Facultad,
                    required: true,
                    include: {
                        model: db.Sede,
                        required: true
                    }
                },
            ]
        }
    ]})
    res.status(200).send(materia)
};


