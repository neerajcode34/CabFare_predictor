// const express = require('express');
// const authController = require('../controllers/authController');

// // check user is logged in or not middleware
// const { isLoggedIn } = require('../middlewares/userAuth');

// // data validation schema and middlewares
// const {loginSchema, registerSchema, validator} = require('../middlewares/userValidator');

// const router = express.Router();

// router
//   .post('/login', validator(loginSchema), authController.login)
//   .post('/register', validator(registerSchema), authController.register)
//   .get('/logout', authController.logout)
//   .get('/isloggedin', isLoggedIn);



// module.exports = router;

const express = require('express');
const authController = require('../controllers/authController');

// check user is logged in or not middleware
const { isLoggedIn } = require('../middlewares/userAuth');

// data validation schema and middlewares
const {loginSchema, registerSchema, validator} = require('../middlewares/userValidator');

const router = express.Router();

router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // set the 'Access-Control-Allow-Origin' header to allow requests from http://localhost:3000
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); // set the allowed HTTP methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // set the allowed request headers
  res.setHeader('Access-Control-Allow-Credentials', 'true'); // set the 'Access-Control-Allow-Credentials' header to 'true'
  next();
});

router
  .post('/login', validator(loginSchema), authController.login)
  .post('/register', validator(registerSchema), authController.register)
  .get('/logout', authController.logout)
  .get('/isloggedin', isLoggedIn);

module.exports = router;
