const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({
    name: String,
    photo: String,
    graduationYear: String,
    domain: String,
    location: String,
    contact: {
        email: String,
        phone: String,
        linkedin: String,
    },
    mentorship: Boolean,
    successStories: [String],
    feedback: [String],
});

module.exports = mongoose.model('Alumni', alumniSchema);