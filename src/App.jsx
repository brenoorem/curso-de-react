import { useState } from "react";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description: "Para se tornar um Full-Stack.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Fazer Exercícios",
      description: "Para praticar o que aprendeu.",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Ler Livros",
      description: "Para expandir o conhecimento.",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    function onDeleteTaskClick(taskId) {
      const newTasks = tasks.filter((task) => task.id != taskId);
    }

    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-900 flex justify-center p-6">
      <div className="w-125">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
      </div>
    </div>
  );
}

export default App;
