const mongoose=require('mongoose');
const url=process.env.mongo_url;
mongoose.connect(url)
.then(()=>{
    console.log("MongoDB connected!")
}).catch((e)=>{
    console.log("MongoDB connection error!")
})