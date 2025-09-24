import { TaskStateModel } from "../../models/TaskStateModel";

export const initialTaskState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '00:00',
    activeTask: null,
    currentCycle: 0,
    config: {
        workTime: 1, // 25 minutes
        shortBreakTime: 1, // 5 minutes
        longBreakTime: 1, // 15 minutes
    },
}

