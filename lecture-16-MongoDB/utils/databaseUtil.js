const mongo = require("mongodb");

const mongoClient = mongo.MongoClient;
const MONGO_URI =
  "mongodb+srv://pratyush:root@cluster0.sigqsdh.mongodb.net/?appName=Cluster0";

let _db;

const mongoConnect = (callback) => {
  mongoClient
    .connect(MONGO_URI)
    .then((client) => {
      callback();
      _db = client.db("airbnb");
    })
    .catch((err) => {
      console.log("error while connecting to Mongo: ", err);
    });
};

const get_db = ()=>{
  if(!_db){
    throw new Error("Mongo not connected!")
  }
  return _db;
}

module.exports = {mongoConnect,get_db}