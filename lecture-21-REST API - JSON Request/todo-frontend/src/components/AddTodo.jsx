import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAddButtonClicked = () => {
    if (!todoName.trim()) return;

    onNewItem(todoName, dueDate);

    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 mb-8 w-full">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          className="flex-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleAddButtonClicked}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-200"
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default AddTodo;