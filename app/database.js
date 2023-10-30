const mongoose = require("mongoose");
// const MONGODB_URI = "mongodb://localhost/pucsd"
const MONGODB_URI = 'mongodb://mongo_db:27017'

mongoose.connect(MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  }).catch(err => {
    console.log('Could not connect to MongoDB. \n', err);
    process.exit();
  });