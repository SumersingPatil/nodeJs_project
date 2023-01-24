let MongoClient = require('mongodb').MongoClient;

async function initDbInstace() {
    try {
        // connect to the mongodb
        const mongoDb = await MongoClient.connect('mongodb://localhost:27017');
        // connet to the database
        const db = mongoDb.db('google_contact');
        //
        return db;
    }
    catch (err) {
        console.log(err)
    }
}

async function initCollection(collectionName) {
    try {
        // connect to the database
        const db = await initDbInstace();
        // connect to the collection
        return db.collection(collectionName);
    }
    catch (err) {

    }
}

// export the db function
module.exports = {
    initDbInstace,
    initCollection
}