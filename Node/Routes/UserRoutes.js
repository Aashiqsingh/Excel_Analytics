const express = require('express')
const route = express.Router();
const userController = require('../Controllers/UserController');

route.post('/register',userController.addUser);
route.post('/login',userController.loginUser);


module.exports = route;
