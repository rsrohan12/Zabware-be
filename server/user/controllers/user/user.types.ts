import { UserTypeEnum } from "helpers/enums";

export interface IUserData {
    User_Id: number;
    Email: string | null;
    Designation: string | null;
    Mobile_Approved: number;
    DOB: string | null;
    Mobile: string | null;
    Ulb_Id: number | null;
    Father_Name: string | null;
    Aadhar_No: string | null;
    Pan_No: string | null;
    Block_Id: number | null;
}

export interface IUserMobileData {
    User_Id: number;
    Token: string | null;
    Model: string | null;
    Model_Lock: string;
    Login_Time: Date;
    Logout_Time: Date | null;
}

export interface IUlbData {
    Ulb_Id: number;
    District: string | null;
    Address: string | null;
    City_Code: string | null;
    Short_Name: string;
}

export interface IUserMaster {
    User_Id: number;
    User_Name: string;
    Full_Name: string | null;
    Password: string;
    User_Type: UserTypeEnum;
    Comp_Master_Id: number | null;
    Status: number | null;
}
