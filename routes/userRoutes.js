const express= require('express');
const router= express.Router();
const {registerUser, loginUser, getUser}= require("../controllers/userController")

router.post("/register", registerUser)

router.post("/login", loginUser)

router.post("/current", getUser)

module.exports= router;