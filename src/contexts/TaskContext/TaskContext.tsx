import { createContext } from "react";
import { TaskStateModel } from "../../models/TaskStateModel";
import { initialTastkState } from "./initialTaskState";

type TaskContextProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

const initialContextValue = {
    state: initialTastkState,
    setState: () => { },
}

export const TaskContext = createContext<TaskContextProps>(initialContextValue)