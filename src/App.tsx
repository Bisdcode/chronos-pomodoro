import './styles/theme.css'
import './styles/global.css'

import { Home } from './pages/Home'
import { useState } from 'react'
import { TaskStateModel } from './models/TaskStateModel'
import { TaskContext } from './contexts/TaskContext'

const initialState: TaskStateModel = {
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

export function App() {
  const [state, setState] = useState(initialState)

  return (
    <TaskContext.Provider value={{ outraCoisa: 321 }}>
      <Home />
    </TaskContext.Provider>
  )
}

export default App
