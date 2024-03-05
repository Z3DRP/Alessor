import IProperty from "./IProperty";

export default interface IPurchaseProperty extends IProperty{
    PurchaseAmount?: number;
    Details?: string;
    SaleSubjectToContract?: boolean;
    IsTrust?: boolean;
    Assignment?: string;
    AssumptionOfMortgage?: string;
    Consideration?: string;
    Authentication?: string; // document
    IsAuthenticated?: string;
}