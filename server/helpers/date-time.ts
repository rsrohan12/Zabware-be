import { CONFIG } from "config/environment";
import moment from "moment-timezone";

const sqlDateFormat = "YYYY-MM-DD";

export const convertUserDateTimeToUTC = (
    dateTime: string,
    fromTimezone: string
) => {
    return moment.tz(dateTime, fromTimezone).utc().format();
};

export const convertUTCToUserDateTime = (
    dateTime: string,
    toTimezone: string
) => {
    return moment.utc(dateTime).tz(toTimezone).format();
};

export const getCurrentDateTimeInUTC = () => {
    return moment.utc().format()
};

export const getCurrentDateInUTC = () => {
    return moment.utc().format(sqlDateFormat);
};

export const formatDateTimeForUser = (
    dateTime: string,
    userTimezone: string
) => {
    return moment
        .tz(dateTime, userTimezone)
        .format(CONFIG.USER_DATE_TIME_FORMAT);
};

export const formatDateForUser = (dateTime: string, userTimezone: string) => {
    return moment.tz(dateTime, userTimezone).format(CONFIG.USER_DATE_FORMAT);
};
