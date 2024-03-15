import { Schema, model } from "mongoose";
import { handelSaveError, setUpdateSettings } from "./hooks.js";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handelSaveError);

contactSchema.pre("findOneAndUpdate", setUpdateSettings);

contactSchema.post("findOneAndUpdate", handelSaveError);

const Contact = model("contact", contactSchema);

export default Contact;
