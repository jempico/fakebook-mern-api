const express = require('express');
const router = express.Router();
const user = require('../controllers/user');
const authJwt = require('../../middlewares/authJwt')


router
    .route("/")
    .post(user.addUser)


module.exports = router;