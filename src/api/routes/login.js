const express = require('express');
const router = express.Router();
const login = require('../controllers/login');
const authJwt = require('../../middlewares/authJwt')


router
    .route("/")
    .post(login.login)


module.exports = router;