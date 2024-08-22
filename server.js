const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
    menteeName: { type: String, required: true },
    sessionDate: { type: Date, required: true },
    sessionTime: { type: String, required: true },
    additionalInfo: String,
    mentorId: { type: String, required: true }
});

const Session = mongoose.model('Session', sessionSchema);

// Route to handle form submission
app.post('/schedule-session', async (req, res) => {
    console.log('Received data:', req.body);

    const { menteeName, sessionDate, sessionTime, additionalInfo, mentorId } = req.body;

    // Ensure that sessionDate is correctly parsed
    const parsedDate = new Date(sessionDate);
    if (isNaN(parsedDate)) {
        return res.status(400).send('Invalid date format');
    }

    const newSession = new Session({
        menteeName,
        sessionDate: parsedDate,
        sessionTime,
        additionalInfo,
        mentorId
    });

    try {
        await newSession.save();
        res.status(201).send('Session scheduled successfully');
    } catch (error) {
        console.error('Error scheduling session:', error);
        res.status(500).send('Error scheduling session');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
