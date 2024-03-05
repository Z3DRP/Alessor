export default interface IMonument {
    Id: string | undefined;
    Name?: string;
    Longitude?: number;
    Latitude?: number;
    Description?: string;
    IsHistoric?: boolean;
    HistoricalDescription?: string;
    Image?: string;
}