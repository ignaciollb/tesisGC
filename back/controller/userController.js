'use strict'

// AQUI Cargamos el modelo para usarlo posteriormente en la siguiente clase
var User = require('../modelos/user.js');

function guardar(req, res) {
    let user = new User()
    user.email = req.body.email
    user.password = req.body.password
    user.nombre_establecimiento = req.body.nombre

    user.save((err, userStore) => {

        if (err) res.status(500).send(`Error base de datos> ${err}`)

        res.status(200).send({ user: userStore })
    })
}
function modificar(req, res) {


    user.findOneAndUpdate({_id:req.params.id}, {
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        edad : req.body.edad,
        rut :req.body.rut
     }, function(err, result) {
        if (err) {
          res.send(err);
        } else {
       
            res.status(200).send({mensaje:"Modificado"})
        }
      });
    
    
}
function eliminar(req,res){
    user.findByIdAndDelete(req.params.id,function(err, result) {
        if (err) {
          res.send(err);
        } else {
       
            res.status(200).send({mensaje:"Eliminado"})
        }
      });
}

function todos(req, res) {

    user.find({},(err,user)=>{
    if(!user) return res.status(404).send({message:'Error la persona no existe'})

         res.status(200).send({user})
     })
}
 

module.exports = {
    guardar,
   todos,
   modificar,
   eliminar
    
};
