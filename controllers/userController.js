const express= require("express")
const AsyncHandler = require("express-async-handler")

//register a user
//route: POST /api/users/register
//access: public
const registerUser= AsyncHandler(async (req,res)=>{
    res.json({message: "register the user"});
})

//login a user
//route: POST /api/users/login
//access: public
const loginUser= AsyncHandler(async(req,res)=>{
    res.json({message: "login user"})
})

//get user into(current)
//route: POST /api/users/user
//access: privae

const getUser= AsyncHandler(async (req,res)=>{
    res.json({message: "current user"})
})

module.exports={registerUser, loginUse, getUser};
