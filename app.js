const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/alumniDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const alumniSchema = new mongoose.Schema({
    name: String,
    graduationYear: Number,
    domain: String,
    location: String,
    contact: {
        email: String
    },
    photo: String
});

const Alumni = mongoose.model('Alumni', alumniSchema);

app.post('/alumni', async (req, res) => {
    const draw = parseInt(req.body.draw);
    const start = parseInt(req.body.start);
    const length = parseInt(req.body.length);

    try {
        const totalRecords = await Alumni.countDocuments({});
        const filteredRecords = totalRecords;

        const alumni = await Alumni.find({})
            .skip(start)
            .limit(length);

        res.json({
            draw,
            recordsTotal: totalRecords,
            recordsFiltered: filteredRecords,
            data: alumni
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
