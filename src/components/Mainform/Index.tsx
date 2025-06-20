import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useTaskContext } from "../../contexts/TaskContext";

export function MainForm() {
  const { setState } = useTaskContext();

  function handleClick() {
    setState(prevState => {
      return {
        ...prevState,
        formattedSecondsRemaining: '21:00'
      }
    })
  }

  return (
    <form className="form" action="">
      <button onClick={handleClick} type="button">Clicar</button>
      <div className="formRow">
        <DefaultInput
          id="meuInput"
          labelText="task"
          type="text"
          placeholder="Digite Algo"
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