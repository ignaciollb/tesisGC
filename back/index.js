"use strict";
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");
var cors = require("cors");
app.use(cors());
app.options("*", cors());

var user_routes = require("./routes/userRoute");
var proceso_routes = require("./routes/procesoRoute");

app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", user_routes);
app.use("/api", proceso_routes);

mongoose.connect(
  "mongodb+srv://ignaciollb:123@cluster0.gmmvc.mongodb.net/TesisGC?retryWrites=true&w=majority",
  (err, res) => {
    if (err) {
      console.log("NO CONECTA");
    } else {
      app.listen(9000, () => {
        console.log("Esta corriendo en puerto 9000");
      });
    }
  }
);

//comentario random sdasd
