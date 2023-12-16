const express=require('express');
const app=express();
const {getMongoDbConnection} =require('./dbConnection')
const { ObjectId } = require('mongodb');

let db;
const init= async()=>{
    db=await getMongoDbConnection();
    console.log("Mongo Db connected!")
    app.listen(8000,()=>{
        console.log("Server is running on port 8000!")
    })
    
}

app.get("/students", async function (req, res) {
    try {
      const students = await db.collection('students').find({}).toArray();
      res.status(200).json(students);
    } catch (e) {
      res.status(500).json("Internal server error!");
    }
  });

app.get("/students/:id", async function (req, res) {
    try {
      const id = req.params.id;
      const result=await db.collection('students').findOne({_id:new ObjectId(id)})
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json("Internal server error!");
    }
  });

  
  
  


  

init();

