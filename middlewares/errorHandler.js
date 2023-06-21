const {clientConstants, serverConstants}= require("../constants");
const ErrorHandler= (error, req, res, next)=>{
    const status= res.status ? res.status: 500;
    switch(status){
        case(clientConstants.VALIDATION_ERROR):
            res.json({title: "validation error", message:error.message, stackTrace: error.stack});
        case (clientConstants.NOT_FOUND):    
            res.json({title: "not found!", message: error.message, stackTrace: error.stack})
        case (clientConstants.FORBIDDEN):    
            res.json({title: "forbidden! cannot access!", message: error.message, stackTrace: error.stack})
        case (clientConstants.UNAUTHORIZED):    
            res.json({title: "unauthorized!", message: error.message, stackTrace: error.stack})
        case(serverConstants.SERVER_ERROR):
            res.json({title: "server error", message: error.message, stackTrace: error.stack})
        default:
            console.log("no errors found");
    }
};

module.exports= ErrorHandler;