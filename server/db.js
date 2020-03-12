const mongoose = require('mongoose');
require('dotenv').config({path: __dirname + '/.env'})

mongoose.Promise = global.Promise;

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/newspapers';


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () =>
  console.log(`Connected to mongo at ${url}`)
);

module.exports = mongoose;
