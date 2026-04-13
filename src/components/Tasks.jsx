import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks(props) {
  return (
    <ul className="space-y-2 p-4 bg-slate-700 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-slate-600 text-white w-full p-2 rounded-md text-left ${task.isCompleted && "line-through"}`}
          >
            {task.title}
          </button>
          <button className="bg-slate-600 text-white p-2 rounded-md">
            <ChevronRightIcon />
          </button>
          <button className="bg-slate-600 text-white p-2 rounded-md">
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
