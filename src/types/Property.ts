import Address from "./Address";
import Deed from "./Deed";
import Lien from "./Lien";
import Monument from "./Monument";
import Restriction from "./Resctiction";
import Tenant from "./Tenant";
import User from "../classes/User";

export default interface Property {
    Id: string;
    Name?: string;
    Address: Address;
    Price: number;
    IsRental: boolean;
    Assessment: number; // possible document
    AssumptionOfMortgage: string; // document
    Attachment: string; // document
    ChainOfTitle: string[];
    IsAttachment: boolean;
    CertifiedCopy: string; // document
    ConstructiveNotice: string; // posible document
    Conveyance: string; // document
    Documents: string[]; // document
    LegalDescription: string;
    IsOccupied: boolean;
    IsRentalOnly: boolean;
    SizeSqFoot: number;
    Bedrooms: number;
    Baths: number;
    Acerage: number;
    Restrictions?: Restriction[];
    Deed: Deed;
    Township: string;
    UniformCommercialCode: string;
    JointTenant: boolean;
    Appraisal: number;
    CloudOnTitle: boolean;
    CommonElements: string;
    isDedication: boolean;
    Dedication: string;
    Easement: string;
    HasEasement: boolean;
    Encumbrance: string;
    HasEncumbrance: boolean;
    Execution: string;
    HasExecution: boolean;
    FeeSimpleEstate: string;
    File: string;
    FileComplete: boolean;
    FinancingStatement: string; // document
    Forclosure: string;
    IsForclosure: boolean;
    Filing: string; // document
    Grantee: Tenant;
    Grantor: User | Tenant;
    Improvements: string[];
    HasImprovements: boolean;
    Tenant: Tenant[];
    Indexed: boolean;
    Indexing: string[]; // documents
    Instrument: string; // document
    Judegement: string;
    HasJudgement: boolean;
    LandContract: string; // document
    LisPendens: string; // is document
    LotAndBlockDescription: string;
    IsMarketableTitle: boolean; 
    MechanicLien: string; // document
    MetesAndBoundsDescription: string;
    Monuments: Monument[];
    Mortgage: string; // document
    Mortgagor: string;
    Parcel: string;
    Patent: string;
    IsPatent: boolean;
    PriorityOfLiens: Lien[];
    PrivateClaims: string;
    PowerOfAttorney: string; // document ** written instrument
    PrincipalMeridian: number;
    IsInProbate: boolean;
    Range: number;
    IsRange: boolean;
    Recordings: string[]; // document
    RecordSeries: string[]; // document
    Satisfaction: string; //document
    Section: string;
    Subdivision: string; // document
    Title?: string; // document
    TitleInsurance: string; // document
    HasTitleInsurance: boolean;
    TenantsInCommon: string;
    TransferTax: number;
    IsCommercial: boolean;
    IsResidential: boolean;
    Vendor: User | Tenant;
    Vendee: User | Tenant;
}