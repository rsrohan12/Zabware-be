import { sendEmail, TemplateId } from "user/helpers/email";
import axios from "axios";
import { CONFIG } from "config";

export async function validateCaptcha(token) {
    try {
        var VERIFY_URL = `https://www.google.com/recaptcha/api/siteverify?secret=${CONFIG.CAPTCHA_SECRET_KEY}&response=${token}`;
        const response = await axios.post(VERIFY_URL);
        return response?.data?.success;
    } catch (err) {
        return false;
    }
}

export const sendForgotPasswordEmail = async (email: string, token: string) => {
    const resetLink = `${CONFIG.APP_BASE_URL}/auth/reset-password?token=${token}`;
    await sendEmail(email, TemplateId.ForgotPassword, {
        resetLink,
        username: email,
    });
};
