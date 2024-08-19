require('dotenv').config();
const express = require('express');
const db = require('./dbconfig');
const cors = require('cors');
const cardRoutes = require('./routes/cardRoute')

const app = express();

// cors middleware
app.use(cors({
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']   
}));

// connect to DB
db();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ping', (req, res) => {
    res.status(200).json('server is running');
});

app.use('/cards', cardRoutes);

const server = app.listen(3050, () => {
    console.log('server is running');
});