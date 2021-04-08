const mongoose = require('mongoose')
const Schema = mongoose.Schema
//Esquema de mongoose para los datos en formato JSON 
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        minlength: 8
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    cedula: {
        type: Number,
        required: true
    }
});

var User = mongoose.model('User', userSchema);
module.exports = User;