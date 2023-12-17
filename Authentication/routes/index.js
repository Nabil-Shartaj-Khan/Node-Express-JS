const express=require('express');
const { registerUser, loginUser, getUsers} = require('../userController');
const {registerValidate, loginValidate }=require("../extras/userValidate");
const { ensureAuth } = require('../extras/auth');

const routes = express.Router();


routes.post("/register",registerValidate,registerUser)

routes.post("/login",loginValidate,loginUser)

routes.get("/users",ensureAuth, getUsers)



module.exports=routes;
