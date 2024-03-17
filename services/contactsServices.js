import Contact from "../models/Contact.js";

const listContacts = (filter = {}, query = {}) =>
  Contact.find(filter, "-createdAt -updatedAt ", query);

const getOneContact = (filter) => Contact.findOne(filter);

const addContact = (data) => Contact.create(data);

const updateOneContact = (filter, data) =>
  Contact.findOneAndUpdate(filter, data);

const updateOneStatusContact = (contactId, fav) =>
  Contact.findOneAndUpdate(contactId, { favorite: fav });

const deleteOneContact = (filter) => Contact.findOneAndDelete(filter);

export default {
  listContacts,
  getOneContact,
  addContact,
  updateOneContact,
  updateOneStatusContact,
  deleteOneContact,
};
