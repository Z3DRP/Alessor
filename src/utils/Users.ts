import IUser from "../interfaces/IUser";
import IAddress from "../interfaces/IAddress";

export default class User {
    public User: IUser;

    constructor(usr: IUser) {
        this.User = usr;
    }

    setContactInfo = (firstname: string, lastname: string, addrs: IAddress, username: string, email: string) => {
        
    }
}