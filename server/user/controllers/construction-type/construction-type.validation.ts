import { NextFunction, Request, Response } from "express";
import Joi from "@hapi/joi";
import { validateReq } from "../../../helpers/api-validations";

const BlocKCreateBody = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
    model: Joi.string().required(),
});

export const validateBlockCreateBody = async (
    req: Request,
    res: Response,
    next: NextFunction
) => validateReq(req, res, next, BlocKCreateBody, "body");

