import Contact from "../models/Contact.js";

const listContacts = () => Contact.find();
const addContact = (data) => Contact.create(data);
const getContactById = (contactId) => Contact.findById(contactId);
const updateContactById = (contactId, data) =>
  Contact.findByIdAndUpdate(contactId, data);
const updateStatusContact = (contactId, fav) =>
  Contact.findByIdAndUpdate(contactId, { favorite: fav });
const removeContact = (contactId) => Contact.findByIdAndDelete(contactId);

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContactById,
  updateStatusContact,
};
