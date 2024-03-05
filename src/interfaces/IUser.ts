import IAddress from "./IAddress";

export default interface IUser{
    Id?: string | undefined;
    FirstName?: string | undefined;
    LastName?: string | undefined;
    Address?: IAddress | undefined;
    Username?: string | undefined;
    PhoneNumber?: string | undefined;
    Email?: string | undefined;
    Password?: string | undefined;
}