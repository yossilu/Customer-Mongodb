require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require('mongoose');

//local mongoDB init
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error',(error) => console.error(error));
db.once('open', () => console.log('Connected to DB'));

//express middleware
app.use(express.json())


//express routes
const customerRouter = require('./routes/customers');
const fileDownload = require('./routes/csv_downloader');
app.use('/customers', customerRouter);
app.use('/download', fileDownload);

//server listener
app.listen(3001, () => console.log('Server Started'));
