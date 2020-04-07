import { TaskInterface } from "./TaskInterface";
export interface RootState {
  count: number;
  price: number;
  tasks: TaskInterface[];
}
