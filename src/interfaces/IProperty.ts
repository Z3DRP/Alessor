import IAddress from "./IAddress";
import IDeed from "./IDeed";
import ILien from "./ILien";
import IMonument from "./IMonument";
import IRestriction from "./IResctiction";
import ITenant from "./ITenant";
import IUser from './IUser';

export default interface IProperty {
    Id: string | undefined;
    Name?: string;
    Address: IAddress;
    Price?: number | undefined;
    IsRental?: boolean;
    Assessment?: number; // possible document
    AssumptionOfMortgage?: string; // document
    Attachment?: string; // document
    ChainOfTitle?: string[];
    IsAttachment?: boolean;
    CertifiedCopy?: string; // document
    ConstructiveNotice?: string; // posible document
    Conveyance?: string; // document
    Documents?: string[]; // document
    LegalDescription?: string;
    IsOccupied?: boolean;
    IsRentalOnly?: boolean;
    SizeSqFoot?: number;
    Bedrooms?: number;
    Baths?: number;
    Acerage?: number;
    Restrictions?: IRestriction[];
    Deed?: IDeed;
    Township?: string;
    UniformCommercialCode?: string;
    JointTenant?: boolean;
    Appraisal?: number;
    CloudOnTitle?: boolean;
    CommonElements?: string;
    isDedication?: boolean;
    Dedication?: string;
    Easement?: string;
    HasEasement?: boolean;
    Encumbrance?: string;
    HasEncumbrance?: boolean;
    Execution?: string;
    HasExecution?: boolean;
    FeeSimpleEstate?: string;
    File?: string;
    FileComplete?: boolean;
    FinancingStatement?: string; // document
    Forclosure?: string;
    IsForclosure?: boolean;
    Filing?: string; // document
    Grantee?: ITenant;
    Grantor?: IUser | ITenant;
    Improvements?: string[];
    HasImprovements?: boolean;
    Tenant?: ITenant[];
    Indexed?: boolean;
    Indexing?: string[]; // documents
    Instrument?: string; // document
    Judegement?: string;
    HasJudgement?: boolean;
    LandContract?: string; // document
    LisPendens?: string; // is document
    LotAndBlockDescription?: string;
    IsMarketableTitle?: boolean; 
    MechanicLien?: string; // document
    MetesAndBoundsDescription?: string;
    Monuments?: IMonument[];
    Mortgage?: string; // document
    Mortgagor?: string;
    Parcel?: string;
    Patent?: string;
    IsPatent?: boolean;
    PriorityOfLiens?: ILien[];
    PrivateClaims?: string;
    PowerOfAttorney?: string; // document ** written instrument
    PrincipalMeridian?: number;
    IsInProbate?: boolean;
    Range?: number;
    IsRange?: boolean;
    Recordings?: string[]; // document
    RecordSeries?: string[]; // document
    Satisfaction?: string; //document
    Section?: string;
    Subdivision?: string; // document
    Title?: string; // document
    TitleInsurance?: string; // document
    HasTitleInsurance?: boolean;
    TenantsInCommon?: string;
    TransferTax?: number;
    IsCommercial?: boolean;
    IsResidential?: boolean;
    Vendor?: IUser | ITenant;
    Vendee?: IUser | ITenant;
}