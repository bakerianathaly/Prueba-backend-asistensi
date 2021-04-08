const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoute')

//Conexión a mongo DB
mongoose.connect('mongodb://localhost/pruebaasistensi', {useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true, useFindAndModify: false })
mongoose.connection.once("open", () =>{
    console.log("Connected to DB")
}).on("error", err =>{
    console.warn("Error ", err)
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routas de la API
userRoutes(app)

app.listen(3000, () =>{
    console.log("Api corriendo en https://localhost:3000");
});

module.exports = app