import IUser from "../interfaces/IUser";
import IAddress from "../interfaces/IAddress";

export const setContactInfo = (firstname: string, lastname: string, addrs: IAddress, usrname: string, email: string): IUser => {
    return {FirstName: firstname, LastName: lastname, Address: addrs, Username: usrname, Email: email};
}

export const generateUid = () => {
    // generate id method
    // NOTE accept a generic and then determine type and prefix id with a letter like A, T, P etc
}