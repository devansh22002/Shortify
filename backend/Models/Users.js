const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, unqiue: true, required: true},
    password: {type: String, required: true},
});


module.exports = mongoose.model('Users', userSchema);