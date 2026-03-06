export type TUser = {
    id?: number;
    password?: string;
    email?: string;
    full_name?: string;
    contact_number?: string;
    country_code?: string;
    phone_code?: string;
    status?: number;
    profile_photo?: string;
    address?: string;
    profile_photo_data?: Buffer;
    last_login_at?: Date;
    last_login_ip?: string;
    onboarding_step?: string;
    email_code?: string;
    email_code_expiry?: Date;
    email_verified?: boolean;
    phone_verified?: boolean;
    billing_name?: string;
    billing_country?: string;
    billing_state?: string;
    billing_city?: string;
    billing_street?: string;
    billing_zip?: string;
    billing_tax_number?: string;
    browser_id?: string;
    timezone?: string;
    createdAt?: Date;
};

export type TUserToken = {
    id: number;
    refresh_token: string;
    last_login_at: Date;
    last_login_ip: string;
};

export type TSignupUserToken = {
    email: string;
    password: string;
    last_login_at: Date;
    last_login_ip: string;
};

export type TUpdateUserPassword = {
    id: string;
    password: string;
};

export type TUsersList = {
    total: number;
    data: TUser[];
};

export type TNewChart = {
    user_id: number;
    chart_id: number;
    active: number;
};

export type TSendVerificationCode = {
    user_id: number;
    code: number;
    email: string;
};

export type TUpdateUser =
    | {
        full_name: string;
        country_code: string;
        image: string;
    }
    | {
        phone_code: string;
        contact_number: string;
    }
    | {
        profile_photo: string;
    }
    | { full_name: string; country_code: string }
    | { email: string }
    | { onboarding_step: string }
    | {
        billing_name: string;
        billing_country: string;
        billing_state: string;
        billing_city: string;
        billing_street: string;
        billing_zip: string;
        billing_tax_number?: string;
    };

export type TSendPhoneVerificationCode = {
    user_id: number;
    code: number;
    phone: string;
};

export type TVerifyEmailPayload = {
    email_code: null;
    email_code_expiry: null;
    email_verified: 1;
    onboarding_step?: string;
};

export type TForgotPassword = {
    password_reset_code: number;
    password_reset_expiry: Date;
    id: number;
};

export type TResetPassword = {
    password: string;
    id: number;
};

export type TLogActivity = {
    id?: number;
    activity: string;
    message: string;
    rel: string;
    rel_id: string;
    user_id: string;
    createdAt?: Date;
    updatedAt?: Date;
};

export type TLogsList = {
    total: number;
    data: TLogActivity;
};

export type TUserChartSettings = {
    id?: number;
    user_id?: number;
    chart_id?: number;
    timeframes: string;
    chart_default_timeframe: string;
    no_chart: boolean;
    show_more: boolean;
    live_updates: boolean;
    alert_on_fall: boolean;
    fall_percentage: string;
    signal_default_timeframe: string;
    signal_default_timerange: string;
    chart_default_timerange: string;
    createdAt?: Date;
    updatedAt?: Date;
};

export type TUserAlertSettings = {
    id?: number;
    user_id?: number;
    timezone: string;
    send_web_alerts: boolean;
    send_web_alerts_always_on: boolean;
    web_hours_from: string;
    web_hours_to: string;
    send_email_alerts: boolean;
    send_email_alerts_always_on: boolean;
    email_hours_from: string;
    email_hours_to: string;
    email_per_day: string;
    send_sms_alerts: boolean;
    send_sms_alerts_always_on: boolean;
    sms_hours_from: string;
    sms_hours_to: string;
    sms_per_day: string;
    createdAt?: Date;
    updatedAt?: Date;
    additional_email_alerts?: string;
    additional_sms_alerts?: string;
};
