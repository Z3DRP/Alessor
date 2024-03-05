import { DeedTypes } from "./DeedTypes";

export default interface IDeed {
    Id: string | undefined;
    Name?: string;
    Covenant?: string;
    Restrictions?: string;
    Document?: string;
    GrantingClause?: string;
    Type?: DeedTypes;
}