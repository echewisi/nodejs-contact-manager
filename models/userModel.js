const mongoose= require("mongoose");


const userSchema= mongoose.Schema({
    username:{
        type: String,
        require: [true, "please add username!"]
    },

    email:{
        type: String,
        require: [true, "please add email!"],
        unique: [true, "email already in use!"]
    },

    password:{
        type: String,
        require: [true, "please add a password!"],

    }
}, {
    timestamps: true,
})

module.exports= mongoose.model("User", userSchema)