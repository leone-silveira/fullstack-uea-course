import Header from "./components/Header/Header.tsx";
import { ClipboardText, PlusCircle } from "phosphor-react";
import styles from "./app.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import Task from "./components/Task/Task.tsx";
import {
  createTodo,
  deleteTodo,
  getTodos,
  isCompleteTodo,
} from "./api/todo.ts";
import { IFilter, ITask } from "./models/Todo.ts";

export default function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<ITask[]>([]); // hook do react
  const [filter, setFilter] = useState<IFilter>(IFilter.Todos);

  // useEffect(() => {
  //   getTodos().then((response) => setTasks(response));
  // }, []);

  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setNewTask(event.target.value);
  };

  const handleCreateTask = (event: FormEvent) => {
    event.preventDefault();
    setFilter(IFilter.Todos);
    createTodo({
      title: newTask,
    }).then(() => {
      getTodos().then((response) => setTasks(response));
    });
  };

  const completeTask = (id: string) => {
    isCompleteTodo(id).then(() => {
      getTodos().then((response) => setTasks(response));
    });
  };

  const removeTask = (id: string) => {
    deleteTodo(id).then(() => {
      getTodos().then((response) => setTasks(response));
    });;
  };

  let count = 0;
  tasks.map((item) => item.isCompleted && ++count);
  const filteredOption = tasks.filter((task) => {
    if (filter == "Ativos") {
      return !task.isCompleted;
    }
    if (filter == "Completados") {
      return task.isCompleted;
    }
    if (filter == "Todos") {
      return true;
    }
  });
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <form className={styles.newText} onSubmit={handleCreateTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChange={handleNewTaskChange}
            required
          />
          <button type="submit">
            Criar
            <PlusCircle size={20} />
          </button>
        </form>
        <div className={styles.options}>
          <button onClick={() => setFilter(IFilter.Todos)}> Todos </button>
          <button onClick={() => setFilter(IFilter.Ativos)}> Ativos </button>
          <button onClick={() => setFilter(IFilter.Completados)}>
            Completados
          </button>
        </div>
        <div>
          <div className={styles.content}>
            <div className={styles.contentHeader}>
              <div>
                <strong>Tarefas criadas</strong>
                <span>{tasks.length}</span>
              </div>

              <div>
                <strong>Concluídas</strong>
                <span>
                  {count} de {tasks.length}
                </span>
              </div>
            </div>
            <div className={styles.contentBox}>
              {/* Se não tiver task montrar um icone de lista vazia */}
              {filteredOption.length > 0 ? (
                filteredOption.map((item) => (
                  <Task
                    key={item.id}
                    title={item.title}
                    id={item.id}
                    isCompleted={item.isCompleted}
                    completeTask={completeTask}
                    removeTask={removeTask}
                  />
                ))
              ) : (
                <>
                  <ClipboardText size={56} />
                  <strong>Você não tem tarefas "{filter}"</strong>
                  {filter === "Completados" && (
                    <small>Não existe nenhuma tarefa completada</small>
                  )}
                  {filter === "Ativos" && (
                    <small>Não existe nenhuma tarefa ativa</small>
                  )}
                  {filter === "Todos" && (
                    <small>Crie tarefas e organize seus itens a fazer</small>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
