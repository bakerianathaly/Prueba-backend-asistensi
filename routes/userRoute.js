const userController = require("../controller/userController")
//Rutas para los endpoint de los metodos del usuario
module.exports = (app) =>{
    app.post('/signup', userController.signUp)
    app.post('/login',  userController.loggedIn)
    app.post('/update',userController.updateUser)
    app.post('/delete', userController.deleteUser)
    app.get('/get',userController.get)
}   