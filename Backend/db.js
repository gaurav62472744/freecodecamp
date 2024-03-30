const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectMongoose = () => {
    mongoose
        .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.f3bnrmf.mongodb.net/freecodecamp`)   
        .then((e) => {
            console.log(`Connected to mongoDB: ${e.connection.host}`);
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = { connectMongoose };
