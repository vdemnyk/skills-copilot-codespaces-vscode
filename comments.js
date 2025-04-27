// create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

// create express app
const app = express();
app.use(bodyParser.json());
app.use(cors());

// define port
const PORT = process.env.PORT || 3000;

// define path to comments file
const commentsFilePath = 'comments.json';

// function to read comments from file
function readComments() {
    if (fs.existsSync(commentsFilePath)) {
        const data = fs.readFileSync(commentsFilePath);
        return JSON.parse(data);
    }
    return [];
}