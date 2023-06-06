const express= require("express");
const router= express.Router();
const {getContacts, getContact, createContact, updateContact, deleteContact}= require("../controllers/ContactController")

router.route("/").get(getContacts)

router.route("/:id").get(getContact)

router.route("/create").post(createContact)

router.route("/update/:id").put(updateContact)

router.route("/delete/:id").delete(deleteContact)

module.exports= router;