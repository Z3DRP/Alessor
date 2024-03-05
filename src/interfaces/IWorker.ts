import IUser from "./IUser";
import IProperty from "./IProperty";
import ITask from "./ITask";

export default interface IWorker extends IUser {
    Pay?: number;
    PaySchedule?: 'bi-weekly' | 'weekly' | 'monthly';
    IsActive?: boolean;
    PropertiesManaged?: IProperty[];
    AssignedTasks?: ITask[];
}