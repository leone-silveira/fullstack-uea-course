import { Trash } from "phosphor-react";
import styles from "./task.module.css";

interface TaskPros {
  id: string;
  title: string;
  isCompleted: boolean;
  completeTask: (id: string) => void;
  removeTask: (id: string) => void;
}

export default function Task({
  title,
  completeTask,
  id,
  removeTask,
  isCompleted,   //This will be need to mantain the checkbox status even when I click in others options
}: TaskPros) {
  return (
    <div className={styles.task}>
      <div>
        {/* Marcar uma tarefa como concluída */}
        <input
          type="checkbox"
          id="task"
          name="task"
          checked={isCompleted}
          onClick={() => completeTask(id)}
        />
        <label htmlFor="task">{title}</label>
      </div>
      {/* Remover uma tarefa */}
      <button type="button" onClick={() => removeTask(id)}>
        <Trash size={24} />
      </button>
    </div>
  );
}
