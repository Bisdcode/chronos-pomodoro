import { TaskStateModel } from "../../models/TaskStateModel";

export const initialTastkState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '00:00',
    activeTask: null,
    currentCycle: 0,
    config: {
        workTime: 25, // 25 minutes
        shortBreakTime: 5, // 5 minutes
        longBreakTime: 15, // 15 minutes
    },
}

