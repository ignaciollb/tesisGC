"use strict";

// AQUI Cargamos el modelo para usarlo posteriormente en la siguiente clase

var User = require("../modelos/user.js");
const passport = require("passport");
function guardar(req, res) {
  let user = new User();
  user.email = req.body.email;
  user.password = req.body.password;
  user.nombre_establecimiento = req.body.nombre_establecimiento;
  User.findOne({ email: req.body.email }, (err, usuarioExistente) => {
    if (usuarioExistente) {
      return res.status(400).send("Email ya registrado");
    }
  });
  user.save((err, userStore) => {
    if (err) res.status(500).send(`Error base de datos> ${err}`);

    res.status(200).send({ user: userStore });
  });
}

// exports.postLogin = (req,res,next)=>{
//     console.log("hola");
//     passport.authenticate('local',(err,usuario,info)=>{
//         if(err){
//             next(err)
//         }
//         if(!usuario){
//             return res.status(400).send('Email o contraseña no válidos');
//         }
//         req.logIn(usuario,(err)=>{
//             if(err){
//                 next(err);
//             }
//             res.send('Login exitoso')
//         })
//     })(req,res,next);
// }

function postLogin(req, res, next) {
  passport.authenticate("local", function (err, usuario, info) {
    if (err) {
      return next(err);
    }
    if (!usuario) {
      return res.status(400).send("Email o contraseña no válidos");
    }
    req.logIn(usuario, function (err) {
      if (err) {
        return next(err);
      }

      return res.send("Login exitoso");
    });
  })(req, res, next);
}

function logout(req, res) {
  req.logout();
  res.send("Logout exitoso");
}

// exports.logout = (req,res)=>{
//     req.logout();
//     res.send('Logout exitoso')
// }
// function modificar(req, res) {

//     user.findOneAndUpdate({_id:req.params.id}, {
//         nombre:req.body.nombre,
//         apellido:req.body.apellido,
//         edad : req.body.edad,
//         rut :req.body.rut
//      }, function(err, result) {
//         if (err) {
//           res.send(err);
//         } else {

//             res.status(200).send({mensaje:"Modificado"})
//         }
//       });

// }

// function eliminar(req,res){
//     user.findByIdAndDelete(req.params.id,function(err, result) {
//         if (err) {
//           res.send(err);
//         } else {

//             res.status(200).send({mensaje:"Eliminado"})
//         }
//       });
// }

// function todos(req, res) {

//     user.find({},(err,user)=>{
//     if(!user) return res.status(404).send({message:'Error la persona no existe'})

//          res.status(200).send({user})
//      })
// }

module.exports = {
  guardar,
  postLogin,
  logout,
  // todos,
  // modificar,
  // eliminar
};
