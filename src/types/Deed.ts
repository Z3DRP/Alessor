import { DeedTypes } from "./DeedTypes";

export default interface Deed {
    Id: string;
    Name: string;
    Covenant?: string;
    Restrictions?: string;
    Document?: string;
    GrantingClause?: string;
    Type?: DeedTypes;
}