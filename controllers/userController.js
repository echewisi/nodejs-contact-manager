const express= require("express")
const AsyncHandler = require("express-async-handler")
const User= require("../models/userModel")
const bcrypt= require("bcrypt")
//register a user
//route: POST /api/users/register
//access: public
const registerUser= AsyncHandler(async (req,res)=>{
    const{username, email, password}= req.body
    if(!username|| !email|| !password){
        res.status(400);
        throw new Error("all fields are required!")
    }
//find if user exists in database by searching with email
    const userAvailable= await User.findOne({email});
//if the user exists, return an error
    if(userAvailable){
        res.status(400);
        throw new Error("this user is already registered");
    }
//if the user doesnt exist
const hashedpassword= await bcrypt.hash(password, 10)
console.log("hashed password: ", hashedpassword)
const user= await User.create({
    username,
    email,
    password: hashedpassword

})
console.log(`user ${user} created`);
if(user){
    res.status(201).json({_id: user.id, email: user.email});
    
}else{
    res.status(400);
    throw new Error("credentials incorrect!")
}
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

module.exports={registerUser, loginUser, getUser};
