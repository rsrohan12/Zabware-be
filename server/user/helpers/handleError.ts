import { RESPONSE_TYPE } from "user/constants";


export const sendResponse = (type: string, message: string, data?: any) => {
    return {
        success: type === RESPONSE_TYPE.SUCCESS,
        message: message,
        data: data ?? null,
    };
};

export const createUserResponse = (user: any) => {
    let userDetails = {
        id: user.id,
        email: user.email,
        first_name:user.first_name,
        last_name:user.last_name,
        role: user.role,
        profile_photo: user.profile_photo,
        last_login_at: user.last_login_at,
        created_at: user.createdAt,
        individual_report:user.individual_report,
        access_to_employee:user.access_to_employee,
        timezone:user.timezone,
        branch:user.branch
    };
    return userDetails;
};
