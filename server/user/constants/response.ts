export const RESPONSE_TYPE = {
    SUCCESS: "Success",
    ERROR: "Error",
};

export const ERROR_MESSAGE = {
    INVALID_LOGIN_REQUEST: "Invalid Email or Password",
    INVALID_CAPTCHA: "Invalid Captcha",
    UNAUTHORIZED_REQUEST: "Unauthorized Access",
    INVALID_TOKEN: "Invalid Token",
    INVALID_REQUEST: "Invalid Request",
    ROLE_EXISTS: "Role already exists",
    ROLE_NOT_EXISTS: "Role does not exist",
    INVALID_OLD_PASSWORD: "Invalid old password",
    USER_EXISTS: "User already exists",
    USER_NOT_EXISTS: "User does not exist",
    INTERNAL_SERVER_ERROR: "Internal Server Error",
    USER_ALREADY_EXISTS: "User already exists",
    INVALID_PARAMETER_REQUEST: "Your request doesn't have valid parameters.",
    ROLE_ASSIGNED_TO_USER: "This role is assigned and cannot be deleted",
    BRANCH_ASSIGNED_TO_USER: "This branch is assigned and cannot be deleted",
    BRANCH_ASSIGNED_TO_CLIENT:
        "This branch is assigned to client and cannot be deleted",

    BRANCH_EXISTS: "Branch already exists",
    BRANCH_NOT_EXISTS: "Branch does not exist",
    POSITION_EXISTS: "Position already exists",
    POSITION_NOT_EXISTS: "Position does not exist",
    REASON_EXISTS: "Reason already exists",
    REASON_NOT_EXISTS: "Reason does not exist",

    MANAGER_EXISTS: "Manager already exists",
    MANAGER_ALREADY_ASSIGNED: "Manager already assigned to the client",
    EMPLOYEE_ALREADY_ASSIGNED: "Employee already assigned to the client",
    MANGER_NOT_EXISTS: "Manager does not exist",
    ADMIN_EXISTS: "Admin already exists",
    ADMIN_NOT_EXISTS: "Admin does not exist",

    EMPLOYEEAVALABILITY_EXISTS: "Employee Avalability already exists",
    EMPLOYEEAVALABILITY_NOT_EXISTS: "Employee Avalability does not exist",

    CLIENT_TASK_EXISTS: "Client Task already exists",
    CLIENT_TASK_NOT_EXISTS: "Client Task does not exist",

    FORBIDDEN_REQUEST: "Forbidden Request",
    CLIENT_END_DATE_PASSED: "Client end date not passed yet",
EMPLOYEE_TASK_ALREADY_ASSIGNED: "Tasks for this day are assigned to another employee. Reassign required."};

export const SUCCESS_MESSAGE = {
    LOGGED_IN: "Logged In",
    PROFILE_UPDATED: "Profile updated successfully",
    ROLES_FETCHED: "Roles fetched successfully",
    ROLE_CREATED: "Role created successfully",
    ROLE_UPDATED: "Role updated successfully",
    ROLE_DELETED: "Role deleted successfully",
    ROLE_FETCHED: "Role fetched successfully",
    USERS_FETCHED: "Users fetched successfully",
    USER_CREATED: "User created successfully",
    USER_UPDATED: "User updated successfully",
    USER_DELETED: "User moved to trash successfully",
    USER_HARD_DELETED: "User deleted successfully",
    USER_FETCHED: "User fetched successfully",
    USER_RESTORED: "User restored successfully",
    METRICS_FETCHED: "Dashboard metrics fetched successfully",
    PASSWORD_UPDATED:
        "Password updated successfully. Please sign in with new password.",
    EMPTY_MESSAGE: "",
    FORGOT_PASSWORD_SENT: "Password reset otp sent successfully.",
    RESET_PASSWORD_SENT: "Password reset link sent successfully.",
    PASSWORD_RESET: "Password reset successfully.",

    BRANCHES_FETCHED: "Branches fetched successfully",
    BRANCH_CREATED: "Branch created successfully",
    BRANCH_UPDATED: "Branch updated successfully",
    BRANCH_DELETED: "Branch deleted successfully",
    BRANCH_FETCHED: "Branch fetched successfully",

    POSITIONS_FETCHED: "Positions fetched successfully",
    POSITION_CREATED: "Position created successfully",
    POSITION_UPDATED: "Position updated successfully",
    POSITION_DELETED: "Position deleted successfully",
    POSITION_FETCHED: "Position fetched successfully",

    EMPLOYEES_FETCHED: "Employees fetched successfully",
    EMPLOYEE_CREATED: "Employee created successfully",
    EMPLOYEE_UPDATED: "Employee updated successfully",
    EMPLOYEE_DELETED: "Employee deleted successfully",
    EMPLOYEE_FETCHED: "Employee fetched successfully",

    REASONS_FETCHED: "Reasons fetched successfully",
    REASON_CREATED: "Reason added successfully",
    REASON_UPDATED: "Reason updated successfully",
    REASON_DELETED: "Reason deleted successfully",
    REASON_FETCHED: "Reason fetched successfully",

    MANAGERS_FETCHED: "All Managers fetched successfully",
    MANAGER_CREATED: "Manager added successfully",
    MANAGER_UPDATED: "Manager updated successfully",
    MANAGER_DELETED: "Manager deleted successfully",
    MANAGER_FETCHED: "Manager fetched successfully",

    ADMINS_FETCHED: "All Admins fetched successfully",
    ADMIN_CREATED: "Admin added successfully",
    ADMIN_UPDATED: "Admin updated successfully",
    ADMIN_DELETED: "Admin deleted successfully",
    ADMIN_FETCHED: "Admin fetched successfully",

    TASKS_FETCHED: "All Task fetched successfully",
    TASK_CREATED: "Task added successfully",
    TASK_UPDATED: "Task updated successfully",
    TASK_FETCHED: "Task fetched successfully",

    WEEKS_UPDATED: "Week updated successfully",
    WEEK_FETCHED: "Week fetched successfully",

    CLIENTS_FETCHED: "All Client fetched successfully",
    CLIENT_CREATED: "Client added successfully",
    CLIENT_UPDATED: "Client updated successfully",
    CLIENT_FETCHED: "Client fetched successfully",
    CLIENT_DELETED: "Client deleted successfully",

    EMPLOYEEAVAILABILITIES_FETCHED:
        "All Employee Avalability fetched successfully",
    EMPLOYEEAVALABILITY_CREATED: "Employee Avalability added successfully",
    EMPLOYEEAVALABILITY_UPDATED: "Employee Avalability updated successfully",
    EMPLOYEEAVALABILITY_FETCHED: "Employee Avalability fetched successfully",
    EMPLOYEEAVALABILITY_DELETED: "Employee Avalability Deleted successfully",

    CLIENT_TASK_UPDATED: "Client Task updated successfully",
    CLIENT_TASK_FETCHED: "Client Task fetched successfully",
    CLIENT_TASKS_FETCHED: "All Client Task fetched successfully",
    CLIENT_TASK_CREATED: "Client Task added successfully",
    CLIENT_TASK_DELETED: "Client Task Deleted successfully",

    TASK_OCCURRENCE_CREATED: "Task occurrence added successfully",
    TASK_OCCURRENCE_UPDATED: "Task occurrence updated successfully",
    TASK_OCCURRENCE_DELETED: "Task occurrence deleted successfully",

    CLIENT_TASK_NOTES_UPDATED: "Client Task Notes updated successfully",
    CLIENT_TASK_NOTE_FETCHED: "Client Task Note fetched successfully",
    CLIENT_TASKS_NOTE_FETCHED: "All Client Task Notes fetched successfully",
    CLIENT_TASK_NOTE_CREATED: "Client Task Note added successfully",
    CLIENT_TASK__NOTE_DELETED: "Client Task Note Deleted successfully",

    TIMEZONE_FETCHED: "All Timezone fetched successfully",
    TASK_TIME_AMMENDMENT_FETCHED:
        "All Task Time Amendment fetched successfully",
    TASK_TIME_AMMENDMENT_UPDATED: "Task Time Amendment Updated successfully",
    CALENDAR_DATA_FETCHED: "All Calendar Data fetched successfully",
    EMPLOYEE_TASK_FETCHED: "All Employee Task fetched successfully",
    EMPLOYEE_APPROVED_TASK_FETCHED:
        "All Approved Employee Task fetched successfully",

    ADD_TASK_REALLOCATION: "Add Task Reallocation  successfully",
    TASK_REALLOCATION_FETCHED: "Task is already allocated",
    NO_TASK_REALLOCATED: "No task is reallocated ",
};
