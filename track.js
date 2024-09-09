const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize Express app
const app = express();
const port = 5000;

// Middleware
app.use(express.json()); // Use express built-in JSON parser
app.use(cors()); // Handle CORS issues
app.use(express.static('public')); // Serve static files

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/alumni', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Alumni Schema
const alumniSchema = new mongoose.Schema({
    photo: String,
    name: String,
    graduationYear: Number,
    domain: String,
    location: String,
    contact: {
        email: String
    }
});

const Alumni = mongoose.model('Alumni', alumniSchema);

// Define Session Schema
const sessionSchema = new mongoose.Schema({
    alumnusId: String,
    menteeName: String,
    menteeEmail: String,
    sessionDate: String,
    sessionTime: String
});

const Session = mongoose.model('Session', sessionSchema);

// Route to get all alumni
app.get('/alumnis', async (req, res) => {
    try {
        const alumnis = await Alumni.find();
        res.status(200).json(alumnis);
    } catch (error) {
        console.error('Error fetching alumni:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to handle session scheduling
app.post('/schedule-session', async (req, res) => {
    try {
        const sessionData = req.body;
        const session = new Session(sessionData);
        await session.save();
        res.status(200).json({ message: 'Session scheduled successfully!' });
    } catch (error) {
        console.error('Error scheduling session:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
