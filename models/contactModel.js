const mongoose= require("mongoose")

const ContactSchema= mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    phone:{
        type: String,
        required: true
    },
    whatsapp_number:{
        type: String,
        required: true
    }
},
{
    timestamps: true
})

module.exports= mongoose.model("contactmodel", ContactSchema)