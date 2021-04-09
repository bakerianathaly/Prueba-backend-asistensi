const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoute')

//Conexión a mongo DB
mongoose.connect('mongodb+srv://admin:admin@cluster0.m4rkv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true, useFindAndModify: false })
//DB local: mongodb://localhost/pruebaasistensi
mongoose.connection.once("open", () =>{
    console.log("Connected to DB")
}).on("error", err =>{
    console.warn("Error ", err)
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routas de la API
userRoutes(app)

app.listen(process.env.PORT || 3000, () =>{
    console.log("Api corriendo en https://localhost:3000");
});

module.exports = app