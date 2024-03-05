import express from "express";
import controllersConts from "../controllers/contactsControllers.js";

const contactsRouter = express.Router();

contactsRouter.get("/", controllersConts.getAllContacts);

contactsRouter.get("/:id", controllersConts.getOneContact);

contactsRouter.delete("/:id", controllersConts.deleteContact);

contactsRouter.post("/", controllersConts.createContact);

contactsRouter.put("/:id", controllersConts.updateContact);

export default contactsRouter;
