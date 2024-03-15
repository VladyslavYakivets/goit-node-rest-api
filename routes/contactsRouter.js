import express from "express";
import controllersConts from "../controllers/contactsControllers.js";
import isValidId from "../middlewares/isValidId.js";

const contactsRouter = express.Router();

contactsRouter.get("/", controllersConts.getAllContacts);

contactsRouter.get("/:id", isValidId, controllersConts.getOneContact);

contactsRouter.delete("/:id", isValidId, controllersConts.deleteContact);

contactsRouter.post("/", controllersConts.createContact);

contactsRouter.put("/:id", isValidId, controllersConts.updateContact);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  controllersConts.updateStatusCont
);

export default contactsRouter;
