const express= require("express")
const AsyncHandler = require("express-async-handler")

//register a user
//route: POST /api/users/register
//access: public

const registerUser= AsyncHandler(async (req,res)=>{
    res.json({message: "register the user"});
})

module.exports=registerUser;
