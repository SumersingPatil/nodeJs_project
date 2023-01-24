// import the express
const express = require('express');
const { initCollection, initDbInstace } = require('./db');
const bodyParser = require('body-parser');
// init the express
const app = express();

// use the body praser
app.use(bodyParser.json());

// routes
// httpMethod(path)
app.get('/contacts', async (req, res) => {
    // init collection
    const collection = await initCollection('contacts');

    const results=await collection.find().toArray();

    res.send(results);
})

app.post('/contacts', async (req, res) => {
    
})

app.get('/country-codes', async (req, res) => {
    // init collection
    const collection = await initCollection('countryCodes');
    // get result
    const results = await collection.find().toArray();
    //
    res.send(results);
})

// get all label
app.get('/labels', async (req, res) => {
    // call the collection
    // what ever the results will come, will pass to the json
    const db = await initDbInstace();
    // connect to the collection
    const collection = db.collection('labels');
    // get all the data from above collection
    // query to the collection
    const results = await collection.find().toArray();
    //
    res.send(results);
})

// create label
app.post('/labels', async (req, res) => {
    // init collection
    const collection = await initCollection('labels');
    // check that given label name exist or not
    const labelInfo = await collection.findOne({ name: req.body.name });
    if (labelInfo) {
        // exist
        res.send({ status: false, msg: 'Label already exist.' });
    }
    else {
        // insert new one
        // insert the collection
        await collection.insertOne(req.body);
        res.send({ status: true, msg: 'Label created successfully.' });
    }
})

// run the application
app.listen(3002, () => {
    console.log('server started');
});