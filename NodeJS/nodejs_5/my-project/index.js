const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
    try {
        const database = client.db('posts');
        const movies = database.collection('posts');

        // Query for a movie that has the title 'Back to the Future'
        const query = { "name": "golan" };
        const movie = (await movies.findOne({}))._id.id

        console.log(typeof movie);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);