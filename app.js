const express = require('express');
require('dotenv').config();
require('./config/dbConnect');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<h1>Upesh Upreti</h1>')
});

app.use('/todo', require('./routes/todoRoutes'));

app.listen(process.env.POT || 3000, (req, res) => {
    console.log('app is up and runnning at port ${process.env.PORT}.');
});