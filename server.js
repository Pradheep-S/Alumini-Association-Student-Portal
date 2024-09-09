const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for all routes

// MongoDB connection string
const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Fetch offers data from MongoDB
app.get('/offers', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('offers');
        const collection = database.collection('offers');
        const offers = await collection.find({}).toArray();
        res.json(offers);
    } catch (error) {
        console.error('Error fetching offers:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Fetch success stories from MongoDB
app.get('/stories', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('alumni');
        const collection = database.collection('stories');
        const stories = await collection.find({}).toArray();
        res.json(stories);
    } catch (error) {
        console.error('Error fetching stories:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
