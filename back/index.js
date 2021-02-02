'use strict'
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })


//String conexion BD 
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