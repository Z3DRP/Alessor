export default interface Monument {
    Id: string;
    Name?: string;
    Longitude?: number;
    Latitude?: number;
    Description?: string;
    IsHistoric?: boolean;
    HistoricalDescription?: string;
    Image?: string;
}