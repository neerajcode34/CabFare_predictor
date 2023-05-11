require('dotenv').config();

PORT = process.env.PORT || 4000;

const cookieParser = require('cookie-parser');
const express = require('express');
const dbConnect = require('./mongodb');
const cors = require('cors');



// Express app setup & configurations
const app = express();

app.use(cors()); 


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", "true"); // set the 'Access-Control-Allow-Credentials' header to 'true'
  next();
});





app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.CORS_DOMAIN,
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
