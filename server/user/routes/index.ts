import * as express from "express";
import userRouter from "./user";
import surveyRouter from "./tax-survey";

const router = express.Router();

router.use("/", userRouter);
router.use("/survey", surveyRouter);

export default router;
