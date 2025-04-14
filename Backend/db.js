const mongoose = require("mongoose");
require("dotenv").config();

const connectToMongo = () => {
    const mongoURI = process.env.MONGO_URI || "mongodb://0.0.0.0:27017/notebook";

    mongoose.connect(mongoURI)
    .then(() => {
        console.log("MongoDB connected successfully!!!");
    })
    .catch((e) => {
        console.log("MongoDB connection failed.");
        console.log("Error is:", e);
    });
};

module.exports = connectToMongo;
