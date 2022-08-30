var express = require('express');
var router = express.Router();

/* GET users listing. */

// http handlers from userController
const userController = require('../controllers/userController')

router.post('/signup', userController.signup);

module.exports = router;
