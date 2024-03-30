const mongoose = require("mongoose");
const { Schema, Document, Model } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: [true, "Please provide name"] },
    email: { type: String, required: [true, "Please provide email"] },
    password: { type: String, required: [true, "Please provide the password"] },
});

const userModel = mongoose.model("user", userSchema);

module.exports=userModel;