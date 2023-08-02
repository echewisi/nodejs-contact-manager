const express= require('express');
const router= express.Router();
const {registeruser, loginUser, getUser}= require("../controllers/userController")

router.post("/register", registeruser)

router.post("/login", loginUser)

router.post("/current", getUser)

module.exports= router;