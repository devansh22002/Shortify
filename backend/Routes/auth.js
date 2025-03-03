const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Models/Users');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// Signup 

router.post('./signup', async (req, res) => {
    if(!username || !password)
    {
        return res.status(400)
        .json({
            message: "All fields are required" 
        })
    };

    const existingUser = await User.findOne({username});
    if(existingUser){
        return res.status(400)
        .json({
            message: "user already existed"
        })
    };

    const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  res.status(201).json({ message: 'User created successfully.' });
});


//  Login 


router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Invalid credentials.' });
  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials.' });
  
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  });
  
  module.exports = router;

