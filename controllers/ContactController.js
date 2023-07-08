const asyncHandler= require("express-async-handler")
const Contact= require("../models/contactModel")
//@desc GET all contacts
//@route GET /api/contacts
//@access public
const getContacts= asyncHandler(async(req, res)=> {
    const contacts= await Contact.find()
    res.status(200).json(contacts); 
});

//@desc GET a contact
//@route GET /api/contacts/:id
//@access public
const getContact= asyncHandler(async(req, res)=> {
    const contact= await Contact.findById(req.params.id)
    if (!contact){
        res.status(404)
        throw new Error("contact not found!")
    }
    res.status(200).json({message: `get contact ${req.params.id}`})
})

//@desc create/POST a contact
//@route POST /api/contacts/create
//@access public
const createContact= asyncHandler(async(req, res)=> {
    console.log("the request body", req.body);
    const {name, email, phone, whatsapp_number}= req.body
    if(!name || !email || !number){
        res.status(400)
        throw new Error("all fields must be filled!")
    }
    const contact= await Contact.create({
        name,
        email,
        phone,
        whatsapp_number

    })
    res.status(201).json(contact); 
})

//@desc update/PUT a contact
//@route PUT /api/contacts/update/:id
//@access public
const updateContact= asyncHandler(async(req, res)=>{
    const contact= Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("contact not found!")
    }

    const updatedConstant= await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.status(200).json({ message: `update contact ${req.params.id}`}); 
})

//@desc delete/DELETE a contact
//@route  DELETE /api/contacts/delete.:id
//@access public
const deleteContact= asyncHandler(async(req, res)=>{
    res.status(200).json( { message: `delete contact ${req.params.id}`}); 
})


module.exports= {getContact, getContacts, createContact, updateContact, deleteContact}