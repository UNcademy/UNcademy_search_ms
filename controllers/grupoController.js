const db = require('../models')
const Grupo = db.Grupo
const Op = db.Sequelize.Op;


exports.findGroupById= async(req, res) =>{
    const id = req.params.id;
    const grupo = await Grupo.findAll({where:{id: id},
        include: [
            {
                model: db.Materia,
                required: true,
            }
        ]})
    res.status(200).send(grupo)
};

exports.findGroupByProfesor= async(req, res) =>{
    const profesor = req.params.profesor;
    const grupo = await Grupo.findAll({where:{docenteTitular: profesor},
        include: [
            {
                model: db.Materia,
                required: true,
            }
        ]})
    res.status(200).send(grupo)
};

exports.findGroupBynumer= async(req, res) =>{
    const numero = req.params.numero;
    const grupo = await Grupo.findAll({where:{numeroGrupo: numero},
        include: [
            {
                model: db.Materia,
                required: true,
            }
        ]})
    res.status(200).send(grupo)
};

exports.findGroupByQuota = async (req, res) =>{
    const cuposDisponibles = Grupo.cuposDisponibles;
    console.log(cuposDisponibles)
    const grupo = await Grupo.findAll({
        where: {cuposDisponibles: {[Op.gt]: 0 }} 
    })
    res.status(200).send(grupo)
};

exports.updateGroup = (req, res) => {
    const id = req.params.id;
    Grupo.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Group was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Group with id=${id}. Maybe Group was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Group with id=" + id
        });
      });
  };