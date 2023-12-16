const UserModel=require('../models/userModel')
const bcrypt=require('bcrypt')

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
    loginUser:(res,req)=>{
        res.send("Login is successful.")
        
    }
}