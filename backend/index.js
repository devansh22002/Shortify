const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./Routes/auth');
const app = express();

dotenv.config();

app.use(cors({

origin: 'http://localhost:5173/',
method: 'POST',
credentials: true
}));


app.use(express.json());
app.use('/api/auth', routes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/', (req, res)=> {
res.send("Hello Devansh");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


