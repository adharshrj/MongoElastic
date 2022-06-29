require('dotenv').config();
const mongoose = require('mongoose');
const mongoURL = process.env.MONGOURL

mongoose.connect(mongoURL);
const database = mongoose.connection

module.exports = { database }