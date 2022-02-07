let express = require ('express')
let app = express()
const port = 3000


const mongoose = require('mongoose');
const db = 'mongodb+srv://Lesya:October2021@comp3123.pe9rd.mongodb.net/COMP3123?retryWrites=true&w=majority'


let server = app.listen(3000, ()=>{
    let host = server.address().address
    let port = server.address().port
    console.log("Server running" +port)
})


app.use(express.static(''))