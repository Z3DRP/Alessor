import ILease from "./ILease";
import IAddress from "./IAddress";
import IUser from "./IUser";
import { TenancyType } from "./TenancyType";
import Property from "./IProperty";
import { TenantStatus } from "./TenantStatus";

export default interface Tenant extends IUser{
    PreviousAddress?: IAddress;
    ResidenceId?: Property;
    RentAmount: number; // might be covered in the lease
    Tenancy: TenancyType,
    RentDueDate: Date;
    PastDue: boolean;
    PastDueBy?: number;
    Lease?: ILease;
    Status?: TenantStatus;
}