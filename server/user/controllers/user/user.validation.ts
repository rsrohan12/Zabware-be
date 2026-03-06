import { NextFunction, Request, Response } from "express";
import Joi from "@hapi/joi";
import { validateReq } from "../../../helpers/api-validations";

const loginUserBody = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
    model: Joi.string().required(),
});

export const validateLoginUserBody = async (
    req: Request,
    res: Response,
    next: NextFunction
) => validateReq(req, res, next, loginUserBody, "body");

const updateProfileBody = Joi.object().keys({
    id:Joi.number(),
    first_name: Joi.string(),
    last_name: Joi.string(),
    timezone: Joi.string() 
    });

export const validateUpdateProfileBody = async (
    req: Request,
    res: Response,
    next: NextFunction
) => validateReq(req, res, next, updateProfileBody, "body");

const changePasswordBody = Joi.object().keys({
    user_id:Joi.string().required(),
    password: Joi.string().required(),
});

export const validateChangePasswordBody = async (
    req: Request,
    res: Response,
    next: NextFunction
) => validateReq(req, res, next, changePasswordBody, "body");

const resetPasswordBody = Joi.object().keys({
    password: Joi.string().required(),
    token: Joi.string().required(),
});

export const validateResetPasswordBody = async (
    req: Request,
    res: Response,
    next: NextFunction
) => validateReq(req, res, next, resetPasswordBody, "body");

const forgotPasswordBody = Joi.object().keys({
    email: Joi.string().email().required(),
});

export const validateForgotPasswordBody = async (
    req: Request,
    res: Response,
    next: NextFunction
) => validateReq(req, res, next, forgotPasswordBody, "body");