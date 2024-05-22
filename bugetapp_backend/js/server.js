const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

const entriesRouter = require('../routes/my_routers');
app.use('/api', entriesRouter);
const getdataRouter = require('../routes/getData');
app.use('/api', getdataRouter);
const deletedataRouter = require('../routes/deleteData');
app.use('/api', deletedataRouter);
const billRouter = require('../routes/postBill.js');
app.use('/api/billss', billRouter);
const getBillDataRouter = require('../routes/getBillData.js');
app.use('/api', getBillDataRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));