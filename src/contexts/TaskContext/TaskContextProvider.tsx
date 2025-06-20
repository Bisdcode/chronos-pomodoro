import { useState } from "react";
import { initialTastkState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = {
    children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [state, setState] = useState(initialTastkState);

    return (
        <TaskContext.Provider value={{ state, setState }}>
            {children}</TaskContext.Provider>
    )
}