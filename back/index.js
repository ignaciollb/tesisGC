const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })


//String conexion BD 
mongoose.connect('mongodb+srv://ignaciollb:123@cluster0.gmmvc.mongodb.net/taller3?retryWrites=true&w=majority', (err, res) => {
//mongoose.connect('mongodb+srv://danielbustos86:daniel123@cluster0-wxfwq.mongodb.net/UBB202001?retryWrites=true&w=majority', (err, res) => {

    if(err){
        console.log("NO CONECTA")
    }
    else{
        app.listen(9000, () => {

            console.log("Esta corriendo en puerto 9000")
        })
    }
})