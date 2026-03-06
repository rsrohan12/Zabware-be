import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { sendResponse } from "user/helpers";
import { ERROR_MESSAGE, RESPONSE_TYPE } from "user/constants";
import { CONFIG } from "../../config";

const rolesPermissions = {
    ADMIN: ["ADMIN", "SENIOR_MANAGER", "MANAGER", "EMPLOYEE"],
    SENIOR_MANAGER: ["SENIOR_MANAGER", "MANAGER", "EMPLOYEE"],
    MANAGER: ["SENIOR_MANAGER","MANAGER", "EMPLOYEE"],
    EMPLOYEE: ["EMPLOYEE"],
};

const hasPermission = (role: string, permission: string): boolean => {
    if (rolesPermissions[role]?.includes("*")) {
        return true;
    }

    return rolesPermissions[role]?.includes(permission) || false;
};

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    let token = req?.headers?.authorization;
    if (!token) {
        return res
            .status(401)
            .send(
                sendResponse(
                    RESPONSE_TYPE.ERROR,
                    ERROR_MESSAGE.UNAUTHORIZED_REQUEST
                )
            );
    }

    try {
        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimLeft();
        }

        jwt.verify(
            token,
            CONFIG.ACCESS_TOKEN_SECRET,
            {},
            async (err, decoded: any) => {
                if (err) {
                    return res
                        .status(401)
                        .send(
                            sendResponse(
                                RESPONSE_TYPE.ERROR,
                                ERROR_MESSAGE.UNAUTHORIZED_REQUEST
                            )
                        );
                }
                (req as any).user = decoded;
                next();
            }
        );
    } catch (err) {
        return res.status(400).send(ERROR_MESSAGE.INVALID_TOKEN);
    }
};

export const authorize = (requiredPermission: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = (req as any).user;
        const { role } = user;

        if (!user || !hasPermission(role, requiredPermission)) {
            return res
                .status(403)
                .send(
                    sendResponse(
                        RESPONSE_TYPE.ERROR,
                        ERROR_MESSAGE.FORBIDDEN_REQUEST
                    )
                );
        }
        next();
    };
};
