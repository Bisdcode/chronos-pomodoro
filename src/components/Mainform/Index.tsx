import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionsTypes } from "../../contexts/TaskContext/taskActions";
import { Tips } from "../Tips";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null)

  // ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  // console.log(nextCycle)
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert("Digite uma tarefa valida")
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    }

    dispatch({ type: TaskActionsTypes.START_TASK, payload: newTask });

    const worker = TimerWorkerManager.getInstance();

    worker.postMessage('FAVOR'); // Sim, posso fazer um favor
    worker.postMessage('FALA_OI'); // Sim, posso fazer um favor
    worker.postMessage('BLABLABLA'); // Sim, posso fazer um favor
    // worker.postMessage('FECHAR'); // Sim, posso fazer um favor


    worker.onmessage(event => {
      console.log('PRINCIPAL recebeu: ', event.data);
      // worker.terminate(); // Encerra e inicia o worker toda vez que iniciar uma nova tarefa
    })
  }


  function handleInterruptTask(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {

    e.preventDefault();

    dispatch({ type: TaskActionsTypes.INTERRUPT_TASK });
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          id="meuInput"
          labelText="task"
          type="text"
          placeholder="Digite Algo"
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>
      <div className="formRow">
        <Tips />
      </div>

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}

      <div className="formRow">
        {!state.activeTask ? (
          <DefaultButton
            aria-label="Iniciar nova tarefa"
            title="Iniciar nova tarefa"
            type="submit"
            icon={<PlayCircleIcon />}
            key='botao_submit'
          />
        ) : (
          <DefaultButton
            aria-label="Interromper nova tarefa"
            title="Interromper nova tarefa"
            type="button"
            icon={<StopCircleIcon />}
            color="red"
            onClick={handleInterruptTask}
            key='botao_button'
          />
        )}

      </div>
    </form>
  )
}