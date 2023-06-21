const asyncHandler= require(express-async-handler)
//@desc GET all contacts
//@route GET /api/contacts
//@access public
const getContacts= asyncHandler(async(req, res)=> {
    res.status(200).json("get all contacts"); 
});

//@desc GET a contact
//@route GET /api/contacts/:id
//@access public
const getContact= async(req, res)=> {
    res.status(200).json({message: `get contact ${req.params.id}`})
}

//@desc create/POST a contact
//@route POST /api/contacts/create
//@access public
const createContact= async(req, res)=> {
    console.log("the request body", req.body);
    const {name, email, number}= req.body
    if(!name || !email || !number){
        res.status(400)
        throw new Error("all fields must be filled!")
    }
    res.status(201).json( {message:"create contact"}); 
}

//@desc update/PUT a contact
//@route PUT /api/contacts/update/:id
//@access public
const updateContact= async(req, res)=> {
    res.status(200).json({ message: `update contact ${req.params.id}`}); 
}

//@desc delete/DELETE a contact
//@route  DELETE /api/contacts/delete.:id
//@access public
const deleteContact= async(req, res)=> {
    res.status(200).json( { message: `delete contact ${req.params.id}`}); 
}


module.exports= {getContact, getContacts, createContact, updateContact, deleteContact}