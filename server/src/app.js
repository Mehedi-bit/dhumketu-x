const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const api= require('./routes/api')

const corsOption = {
    origin: ['http://localhost:3000', 'https://dhumketux.onrender.com/'],
};

const app = express();

// app.use(cors({origin: 'https://dhumketux.onrender.com/'}));
app.use(cors(corsOption));
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/v1', api);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})


module.exports = app;