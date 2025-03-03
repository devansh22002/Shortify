const express = require('express');
const auth = require('./auth');
const authMiddleware = require('../Middlewares/authMiddleware');

const router =  express.Router();

router.post('/signup', signup);               // Controller handles signup logic
router.post('/login', login);                 // Controller handles login logic
router.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: 'Protected route', user: req.user });
});

module.exports = router;