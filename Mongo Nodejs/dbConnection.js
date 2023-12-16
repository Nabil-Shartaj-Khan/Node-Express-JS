const { MongoClient } = require('mongodb');

const getMongoDbConnection= async ()=>{

    try{
        const url = process.env.url;
        const client=await MongoClient.connect(url);
        return client.db();

    } catch(e){
        throw e;
    }


}

module.exports={
    getMongoDbConnection
}