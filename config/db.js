require("dotenv").config();
const mongoose = require("mongoose");



mongoose.connect(process.env.MONGO_URI).then(function () {
  
  console.log("connected to mongodb");
});

module.exports = mongoose.connection;
