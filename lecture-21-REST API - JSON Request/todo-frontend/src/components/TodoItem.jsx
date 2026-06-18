function TodoItem({ id, todoName, todoDate, onDeleteClick }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex justify-between items-center hover:shadow-lg transition-all">
      <div>
        <h3 className="font-semibold text-lg">
          {todoName}
        </h3>

        <p className="text-gray-500 text-sm">
          Due: {todoDate}
        </p>
      </div>

      <button
        onClick={() => onDeleteClick(id)}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;