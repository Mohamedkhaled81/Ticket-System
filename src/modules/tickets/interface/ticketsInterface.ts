import { Status } from '../enums/ticketsEnums';
import { Priority } from '../enums/ticketsEnums';

export interface ITicket {
  id: string;
  title: string;
  description: string;
  status: Status;
  priority: Priority;
  reporter: string;
  assignee: string;
  createdAt: string;
  updatedAt: string;
}
