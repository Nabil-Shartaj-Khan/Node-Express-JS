const express=require('express');
const app=express();
const {getMongoDbConnection} =require('./dbConnection')

let db;
const init= async()=>{
    db=await getMongoDbConnection();
    console.log("Mongo Db connected!")
    app.listen(8000,()=>{
        console.log("Server is running on port 8000!")
    })
    



}

init();

