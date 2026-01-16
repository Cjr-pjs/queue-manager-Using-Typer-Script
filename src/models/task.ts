import { TaskStatus } from "./TaskStatus";

export interface Task {
  id: string;
  payload: string;
  status: TaskStatus;
}
