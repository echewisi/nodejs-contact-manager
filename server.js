const express= require("express");
const ErrorHandler = require("./middlewares/errorHandler");
const dotenv= require("dotenv").config();
const connectdb= require("./config/dbconnection");

// connectdb()
const app= express();

const port= process.env.PORT || 5000;

//apply middlewares here
app.use(express.json())
app.use("/api/contacts", require("./routes/ContactRoutes")); //app.use() is known as the middleware
app.use(ErrorHandler);

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})