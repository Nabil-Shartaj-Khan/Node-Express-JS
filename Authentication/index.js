const express=require('express')
const routes=require("./routes");
const bodyParser = require('body-parser');
const dot=require("dotenv").config();
require('./config/db')
const app=express();
const PORT=process.env.PORT||8080;

app.use(bodyParser.json());
app.use("/nsk",routes);


app.listen(PORT,function(){
    console.log("Server is running on PORT: ${PORT}")
})

