import { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
    id: string;
    name: string;
    duration: number; // Duration in seconds
    startDate: number;
    completeDate: number | null; // quando for completado
    interruptDate: number | null; // quando for interrompido
    type: keyof TaskStateModel['config'];
}