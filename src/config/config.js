const mongoose = require("mongoose");

// require("dotenv").config();
// console.log("MongoDB+URL value is :" + process.env.MongoDB_URL);
// console.log("DB_URI value is :" + process.env.DB_URI);
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
console.log("mongo db connection is runninig");
db.on("error", error => {
  console.log("MongoDB Connection error");
  console.error(error);
});

module.exports = db;
