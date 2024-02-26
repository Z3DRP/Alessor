import { Address } from "cluster";

export default class User {
    protected Id: string | undefined;
    public FirstName: string | undefined;
    public LastName: string | undefined;
    public Address: Address | undefined;
    public CompanyName: string | undefined;
    public Username: string | undefined;
    public PhoneNumber: string | undefined;
    public Email: string | undefined;
    private Password: string | undefined;

    constructor(firstname: string, lastname: string) {
        this.FirstName = firstname;
        this.LastName = lastname;
    }

    setContactInfo(addrs: Address, company: string, phoneNumber: string, emailAddrs: string) {
        this.Address = addrs;
        this.CompanyName = company;
        this.PhoneNumber = phoneNumber;
        this.Email = emailAddrs;
    }

    initUser(uid: string, usrname: string, pwd: string) {
        this.Id = uid;
        this.Username = usrname;
        this.Password = pwd;
    }


}