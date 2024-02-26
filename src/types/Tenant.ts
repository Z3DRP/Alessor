import Lease from "./Lease";
import Address from "./Address";
import { TenancyType } from "./TenancyType";
import Property from "./Property";
import { TenantStatus } from "./TenantStatus";

export default interface Tenant {
    Id: string;
    FirstName: string;
    LastName: string;
    PreviousAddress?: Address;
    ResidenceId?: Property;
    RentAmount: number; // might be covered in the lease
    Tenancy: TenancyType,
    RentDueDate: Date;
    PastDue: boolean;
    PastDueBy?: number;
    Lease?: Lease;
    Status?: TenantStatus;
}