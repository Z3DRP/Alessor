import { Address } from "cluster";

export default class User {
    protected Id: string;
    public FirstName: string;
    public LastName: string;
    public Address: Address;
    public CompanyName: string;
    public Username: string;
    private Password: string | undefined;

    constructor(uid: string, firstname: string, lastname: string, addrs: Address, company: string, usrname: string) {
        this.Id = uid;
        this.FirstName = firstname;
        this.LastName = lastname;
        this.Address = addrs;
        this.CompanyName = company;
        this.Username = usrname;
    }
}