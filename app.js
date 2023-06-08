const express = require('express');
require('dotenv').config();
require('./config/dbConnect');
const cors = require('cors');

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));


app.get('/', (req, res) => {
    res.send('<h1>Upesh Upreti</h1>')
});

app.use('/todo', require('./routes/todoRoutes'));

app.listen(process.env.POT || 3000, (req, res) => {
    console.log('app is up and runnning at port ${process.env.PORT}.');
});