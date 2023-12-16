const express=require('express');
const { registerUser, loginUser } = require('../userController');
const {registerValidate}=require("../extras/userValidate")
const routes=express.Router();


routes.post("/register",registerValidate,registerUser)

routes.post("/login",loginUser)



module.exports=routes;
