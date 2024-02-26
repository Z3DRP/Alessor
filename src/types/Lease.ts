// make it so leases can be inputed on a form and then
// automatically exported as a document, this will also allow updates
export default interface Lease {
    Id: String;
    Name?: String;
    ValidFrom?: Date;
    ValidTo?: Date;
    Length?: number;
    Body?: String;
    Price?: number;
}