const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000; // You can change this port number

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/mentorship', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Schema and Model
const sessionSchema = new mongoose.Schema({
    menteeName: String,
    sessionDate: Date,
    sessionTime: String,
    additionalInfo: String,
    mentorId: String
});

const Session = mongoose.model('Session', sessionSchema);

// Route to handle form submission
app.post('/schedule-session', async(req, res) => {
    const { menteeName, sessionDate, sessionTime, additionalInfo, mentorId } = req.body;

    const newSession = new Session({
        menteeName,
        sessionDate,
        sessionTime,
        additionalInfo,
        mentorId
    });

    try {
        await newSession.save();
        res.status(201).send('Session scheduled successfully');
    } catch (error) {
        console.error('Error scheduling session:', error); // Log error for debugging
        res.status(500).send('Error scheduling session');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});