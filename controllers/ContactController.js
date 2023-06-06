//@desc GET all contacts
//@route GET /api/contacts
//@access public
const getContacts= (req, res)=> {
    res.status(200).json("get all contacts"); 
};

//@desc GET a contact
//@route GET /api/contacts/:id
//@access public
const getContact= (req, res)=> {
    res.status(200).json({message: `get contact ${req.params.id}`})
}

//@desc create/POST a contact
//@route POST /api/contacts/create
//@access public
const createContact= (req, res)=> {
    res.status(201).json( {message:"create contact"}); 
}

//@desc update/PUT a contact
//@route PUT /api/contacts/update/:id
//@access public
const updateContact= (req, res)=> {
    res.status(200).json({ message: `update contact ${req.params.id}`}); 
}

//@desc delete/DELETE a contact
//@route  DELETE /api/contacts/delete.:id
//@access public
const deleteContact= (req, res)=> {
    res.status(200).json( { message: `delete contact ${req.params.id}`}); 
}


module.exports= {getContact, getContacts, createContact, updateContact, deleteContact}