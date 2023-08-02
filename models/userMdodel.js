const mongoose= require("mongoose");


const userSchema= mongoose.Schema({
    username:{
        type: String,
        require: [true, "please add username"]
    },

    email:{
        type: String,
        require: [true, "please add email"]
    }
})