'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

var cors = require('cors');
app.use(cors());
app.options('*', cors());

var user_routes = require('./routes/userRoute');


app.use(bodyParser.json())
app.use('/api', user_routes);


mongoose.connect('mongodb+srv://ignaciollb:123@cluster0.gmmvc.mongodb.net/TesisGC?retryWrites=true&w=majority', (err, res) => {
    
if(err){
        console.log("NO CONECTA")
    }
    else{
        app.listen(9000, () => {

            console.log("Esta corriendo en puerto 9000")
        })
    }
})

//comentario random sdadasd