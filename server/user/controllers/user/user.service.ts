import { User } from "user/models";

export default class UserService {
    static async login(username: string, password: string) {
        const obj = new User();
        const response = await obj.login(username, password);
        return response;
    }

    static async getSyncStatus(userId: number) {
        const obj = new User();
        const response = await obj.getSyncStatus(userId);
        return response;
    }

    static async handleMobileToken(userId: number,model:string) {
        const obj = new User();
        const response = await obj.handleMobileToken(userId,model);
        return response;
    }

    static async getUserData(userId: number) {
        const obj = new User();
        const response = await obj.getUserData(userId);
        return response;
    }

    static async getUlbInfo(ulbId: number) {
        const obj = new User();
        const response = await obj.getUlbInfo(ulbId);
        return response;
    }
        static async getUserMobileToken(ulbId: number) {
        const obj = new User();
        const response = await obj.getMobileToken(ulbId);
        return response;
    }
}
