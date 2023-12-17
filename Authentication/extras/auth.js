const jwt=require('jsonwebtoken')
const ensureAuth=(req,res,next)=>{

    if(!req.headers['authorization']){
        return res.status(403).json({message:"Authorized access only!"})
    }

    try{

        const decodedToken=jwt.verify(req.headers["authorization"],process.env.SECRET);
        return next();

    }
    catch(e){
        return res.status(403).json({message:"Token expired!"})

    }
}

module.exports={
    ensureAuth
}