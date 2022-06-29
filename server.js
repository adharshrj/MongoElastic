const express = require('express');
const UserRoutes = require('./routes/UserRoutes');
const CarRoutes = require('./routes/CarRoutes')

require('dotenv').config();
const mongoose = require('mongoose');
const mongoURL = process.env.MONGOURL

mongoose.connect(mongoURL);
const database = mongoose.connection

module.exports = database

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

app.use('/user', UserRoutes)
app.use('/car', CarRoutes)



