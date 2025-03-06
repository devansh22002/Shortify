// 

require('dotenv').config();
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Models/Users');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "default_secret_key"; // ✅ Added fallback

// ✅ Signup Route
router.post('/signup', async (req, res) => {
    const { username, password } = req.body; // ✅ Extract username & password
    console.log(username, password)
    // ✅ Validate input
    if (!username || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // ✅ Check if user exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Save user to DB
    const user = new User({ username, password: hashedPassword });
    await user.save();
    console.log("✅ User saved:", user);

    res.status(201).json({ message: "User created successfully." });
});

// ✅ Login Route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    

    // ✅ Check if user exists
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "Invalid credentials." });

    // ✅ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials." });

    // ✅ Generate JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    console.log(token);

    res.json({ token });
});

module.exports = router;
