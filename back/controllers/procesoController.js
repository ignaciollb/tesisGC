"use strict";
//AQUI Cargamos el modelo para usarlo posteriormente en la siguiente clase
var Proceso = require("../modelos/proceso.js");
var Estandar = require("../modelos/estandar.js");
var User = require("../modelos/user.js");

function guardar(req, res) {
  let proceso = new Proceso();

  proceso.user = req.body.idUser;
  proceso.estandar = req.body.idStandar;
  proceso.descripcion = req.body.descripcion;
  proceso.errores_comunes = req.body.errores_comunes;
  proceso.soluciones = req.body.soluciones;
  proceso.nivel_desarrollo = req.body.nivel_desarrollo;
  proceso.fecha = req.body.fecha;
  proceso.documentos = req.body.documentos;

  proceso.save((err, procesoStore) => {
    if (err) res.status(500).send(`Error base de datos > ${err}`);

    res.status(200).send({ proceso: procesoStore });
  });
}

//creo que esta mal

function modificar(req, res) {
  Proceso.findOneAndUpdate(
    { _id: req.params.id },
    {
      user: req.body.idUser,
      estandar: req.body.idStandar,
      descripcion: req.body.descripcion,
      errores_comunes: req.body.errores_comunes,
      soluciones: req.body.soluciones,
      nivel_desarrollo: req.body.nivel_desarrollo,
      fecha: req.body.fecha,
      documentos: req.body.documentos,
    },
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send({ mensaje: "Modificado" });
      }
    }
  );
}
//idk
function listar(req, res) {
  Proceso.find({ user: req.params.id })
    .populate("libro")
    .populate("persona")
    .exec((err, resultado) => {
      res.status(200).send({ resultado });
    });
}

function eliminar(req, res) {
  Proceso.findByIdAndDelete(req.params.id, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send({ mensaje: "Eliminado" });
    }
  });
}

module.exports = {
  guardar,
  modificar,
  eliminar,
  listar
};
