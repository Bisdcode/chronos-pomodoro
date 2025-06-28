import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef, useState } from "react";

export function MainForm() {
  const taskNameInput = useRef<HTMLInputElement>(null)

  function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log('Deu certo', taskNameInput.current?.value)
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
        />
      </div>
      <div className="formRow">
        <p>Próximo intervalo é de 25min</p>
      </div>
      <div className="formRow">
        <Cycles />
      </div>
      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} color="green" />
      </div>
    </form>
  )
}