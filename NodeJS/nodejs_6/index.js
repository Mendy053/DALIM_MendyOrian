const { MongoClient, ObjectId } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'poster';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('posts');


    return await collection.deleteOne({ _id: new ObjectId("65cba0a0fa0bc21e3a4b39cd") });

    //return await collection.find({id: 100}).toArray();
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());