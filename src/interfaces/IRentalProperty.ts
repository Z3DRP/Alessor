import IProperty from "./IProperty";
import ILease from "./ILease";

export default interface IRentalProperty extends IProperty {
    Lease?: ILease;
    LeaseTerm?: number;
    PersonalProperty?: string;
    Chattel?: string;
}