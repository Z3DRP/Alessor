import Address from "./Address";
import Property from "./Property";

export default interface PurchaseProperty extends Property{
    Id: string;
    Address: Address;
    PurchaseAmount: number;
    Details: string;
    SaleSubjectToContract: boolean;
    IsTrust: boolean;
    Assignment: string;
    AssumptionOfMortgage: string;
    Consideration: string;
    Authentication: string; // document
    IsAuthenticated: string;
}