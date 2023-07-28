const express= require('express');
const router= express.Router();
const {registeruser}= require("../controllers/userController")

router.post("/register", registeruser)

router.post("/login", (req,res)=>{
    res.json({message:'login user'});
})

router.post("/current", (req, res)=>{
    res.json({message: 'current user information'})
})

module.exports= router;