import Property from "./Property";
import Lease from "./Lease";

export default interface RentalProperty extends Property {
    Lease: Lease;
    LeaseTerm: number;
    PersonalProperty: string;
    Chattel: string;
}