const express = require('express');
const userModel = require('../model/userModel.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Check if the email already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email id already exists" });
        }

        // Hash the password
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                return res.status(500).json({ message: "Internal Server Error", error: err.message });
            }

            // Create a new user instance with hashed password
            const user = new userModel({ name, email, password: hash });

            // Save the user to the database
            await user.save();
            res.json({ message: "Successfully Registered" });
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});


userRouter.post("/login", async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email });
        if (!user || !user.email || !user.password) {
            return res.status(401).json({ message: "Invalid User or Password" }); // 401 for Unauthorized
        }

        const validPassword = bcrypt.compareSync(req.body.password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: "Incorrect Password" }); // 401 for Unauthorized
        }

        const token = jwt.sign({ id: user._id }, process.env.SECRET_CODE || '');
        let userData = {
            "name": user.name,
            "email": user.email
        }
        res.json({ message: "Login Success", userData, token });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message }); // 500 for Internal Server Error
    }
});

module.exports = userRouter;


