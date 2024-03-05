import IProperty from "./IProperty";

export default interface ITask {
    Id: string | undefined;
    Name?: string | undefined;
    Description?: string;
    Type: 'tenant' | 'maintenance' | 'alessor';
    Properties?: IProperty[];
    Action?: string;
    CreatedDate: Date;
    CompletionDate: Date;
    IsComplete: boolean;
}