import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [SearchParams] = useSearchParams();
  const title = SearchParams.get("title");
  const description = SearchParams.get("description");

  return (
    <div className="w-screen h-screen bg-slate-900 flex justify-center p-6">
      <div className="w-screen h-screen bg-slate-900 flex justify-center p-6">
        <div className="w-125 space-y-4">
          <div className="flex justify-center relative mb-6 text-white">
            <button
              onClick={() => navigate(-1)}
              className="absolute left-0 bottom-0"
            >
              <ChevronLeftIcon />
            </button>
            <h1 className="text-3xl text-slate-100 font-bold text-center">
              Detalhes da Tarefa
            </h1>
          </div>
          <div className="bg-slate-600 text-white w-full p-2 rounded-md">
            <h2 className="text-xl font-bold">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
