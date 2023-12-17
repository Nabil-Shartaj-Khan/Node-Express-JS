const UserModel=require('../models/userModel')
const bcrypt=require('bcrypt')
const jwt=require("jsonwebtoken");
const userModel = require('../models/userModel');

module.exports={
    registerUser: async(req,res)=>{
        const userModel=new UserModel(req.body);
        userModel.password=await bcrypt.hash(req.body.password,10)
        try{
            const response=await userModel.save();
            response.password=undefined;
            return res.status(201).json({message:"Successful registration",data:response})
        }
        catch(err){
            return res.status(500).json({message:"Error!",err})

        }

        res.send("Registration is successful.")
        },
    loginUser: async(req,res)=>{
        try{
            const user=await UserModel.findOne({email:req.body.email})
            if(!user){
                return res.status(401).json({message:"Authentication failed, invalid username/password."})
            }

            const passEqual=await bcrypt.compare(req.body.password, user.password);

            if(!passEqual){
                return res.status(401).json({message:"Authentication failed, invalid username/password."})
            }

            const tokenObject={
                _id: user._id,
                fullName: user.fullName,
                email: user.email

            }

            const token=jwt.sign(tokenObject,process.env.SECRET,{expiresIn:"4h"});
            return res.status(200).json({token,tokenObject})
        }
        catch(err){
            return res.status(500).json({message:"error",err})
        }
        
    },

    getUsers:async(req,res)=>{
       
        try{

            const users=await userModel.find({},{password:0});
            return res.status(200).json({data:users})
        } 
        catch(e){
            res.status(500).json({message:"error",e})

        }
        
    }
}