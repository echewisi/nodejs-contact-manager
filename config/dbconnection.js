const mongoose= require("mongoose")
// const connection_string= require("../.env/CONNECTION_STRING")
const connectdb= async()=>{
    try{
        const connect= await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("database connected: ", connect.connection.host, connect.connection.name);
    }catch(err){
        console.log(err);
        process.exit(1)
    }
}

module.exports= connectdb