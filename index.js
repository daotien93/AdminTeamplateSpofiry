const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const authRoute = require('./routes/auth');

const DB = process.env.MONGO_URL

// Connect Database
mongoose
  .connect(DB, {
    usenewurlparser: true,
    useunifiedtopology: true,
  })
  .then(() => {
    console.log('Successfully connected ');
  })
  .catch((error) => {
    console.log(`can not connect to database, ${error}`);
  });

app.use(cors());
app.use(express.json());
app.use('/api/v1/auth', authRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log('Backend is running');
});
