// create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// create web server
const app = express();

// connect to MongoDB
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// create comment schema
const commentSchema = new mongoose.Schema({
    name: String,
    text: String
});

// create comment model
const Comment = mongoose.model('Comment', commentSchema);

// middleware
app.use(cors());
app.use(bodyParser.json());

// API routes
app.get('/comments', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});git add comments.js