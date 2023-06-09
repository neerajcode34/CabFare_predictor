require('dotenv').config();

PORT = process.env.PORT || 4000;

const cookieParser = require('cookie-parser');
const express = require('express');
const dbConnect = require('./mongodb');
const cors = require('cors');

// Express app setup & configurations
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'https://resonant-malasada-0a1e60.netlify.app/',
  credentials: true
}))


// connect database 
dbConnect();

// include & use routes
const authRoute = require('./routes/authRoute');

app.use('/auth',authRoute);



// app.listen(PORT);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

dbConnect().then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error', err);
});
