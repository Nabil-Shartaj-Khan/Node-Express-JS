const { MongoClient } = require('mongodb');

const getMongoDbConnection= async ()=>{

    try{
        const url = "mongodb+srv://shartajnabil:2ubb2IUjD8YRJ8QK@cluster0.qb5qxso.mongodb.net/test?retryWrites=true&w=majority";
        const client=await MongoClient.connect(url);
        return client.db();

    } catch(e){
        throw e;
    }


}

module.exports={
    getMongoDbConnection
}