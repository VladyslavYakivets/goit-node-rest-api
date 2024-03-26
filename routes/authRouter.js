import express from "express";
import authController from "../controllers/authController.js";
import validateBody from "../decorators/validateBody.js";
import {
  userSignupSchema,
  userSigninSchema,
  userEmailSchem,
} from "../schemas/usersSchemas.js";
import authenticate from "../middlewares/authenticate.js";
import upload from "../middlewares/upload.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(userSignupSchema),
  authController.register
);

authRouter.get("/verify/:verificationToken", authController.verify);

authRouter.post("/verify", validateBody(userEmailSchem), authController.resendVerify);

authRouter.post("/login", validateBody(userSigninSchema), authController.login);

authRouter.get("/current", authenticate, authController.getCurrent);

authRouter.post("/logout", authenticate, authController.logout);

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  authController.updateAvatar
);

export default authRouter;
