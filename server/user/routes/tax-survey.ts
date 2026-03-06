import * as express from "express";
import * as AuthValidation from "../controllers/user/user.validation";
import SurveyController from "user/controllers/property-tax-survey/survey.controllers";

const router = express.Router();

const {
    validateLoginUserBody,
} = AuthValidation;
const {
saveServeyForm
} = SurveyController;

router.post("/save", saveServeyForm);

export default router;
