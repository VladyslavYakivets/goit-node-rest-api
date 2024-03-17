import express from "express";
import authController from "../controllers/authController.js";
import validateBody from "../decorators/validateBody.js";
import { userSignupSchema, userSigninSchema } from "../schemas/usersSchemas.js";
import authenticate from "../middlewares/authenticate.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(userSignupSchema),
  authController.register
);

authRouter.post("/login", validateBody(userSigninSchema), authController.login);

authRouter.get("/current", authenticate, authController.getCurrent);

authRouter.post("/logout", authenticate, authController.logout);

export default authRouter;
