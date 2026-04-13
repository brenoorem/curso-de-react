function AddTask() {
  return (
    <div className="space-y-2 p-4 bg-slate-700 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md placeholder-gray-100 text-white"
      ></input>
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md placeholder-gray-100 text-white"
      ></input>
      <button className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">
        Adiocionar
      </button>
    </div>
  );
}

export default AddTask;
