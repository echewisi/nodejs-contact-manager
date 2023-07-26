const express= require('express');
const router= express.Router();

router.post("/register", (req,res)=>{
    res.json({message: 'resgister the user'});
})

router.post("/login", (req,res)=>{
    res.json({message:'login user'});
})

router.post("/current", (req, res)=>{
    res.json({message: 'current user information'})
})

module.exports= router;