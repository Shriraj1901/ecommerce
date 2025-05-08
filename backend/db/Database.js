const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI || "mongodb+srv://shrirajjadhav:eshop123@cluster0.f5wox.mongodb.net/")
    .then((data) => {
      console.log(`mongod connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;