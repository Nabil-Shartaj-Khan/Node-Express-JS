const express=require('express')
const routes=require("./routes")
const dot=require("dotenv").config();
const app=express();
const PORT=process.env.PORT||8080;

app.use("/nsk",routes);


app.listen(PORT,function(){
    console.log("Server is running on PORT: ${PORT}")
})

