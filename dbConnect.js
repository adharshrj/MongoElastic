require('dotenv').config();
const mongoose = require('mongoose');
const mongoURL = process.env.MONGOURL

mongoose.connect(mongoURL);
mongoose.Promise = global.Promise 
const database = mongoose.connection

module.exports = { database }