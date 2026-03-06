import * as express from "express";
import UserController from "user/controllers/user/user.controller";
import * as AuthValidation from "../controllers/user/user.validation";

const router = express.Router();

const {
    validateLoginUserBody,
} = AuthValidation;
const {
    login,
} = UserController;

router.post("/login", validateLoginUserBody, login);

export default router;
