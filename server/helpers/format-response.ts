import * as CONSTANTS from "../constants/";
import { TUser } from "common/types/user/user.type";

const { RESPONSES } = CONSTANTS;
export default (message, data, error = false) => ({
    error: !!error,
    message: message || (error ? RESPONSES.common500 : "Success"),
    data,
});


export function asType<T>(data: unknown): T {
  return data as T;
}
