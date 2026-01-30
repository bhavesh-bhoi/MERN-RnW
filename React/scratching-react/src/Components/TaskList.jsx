function TaskList({ tasks, deleteTask }) {
  return (
    // <div className="max-w-5xl mx-auto bg-gray-200 p-6 rounded-xl">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-50 py-6">
      {/* Task items */}
      {tasks.map((task, index) => {
        return (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-3xl shadow-sm flex justify-between items-center text-wrap"
          >
            {/* Task content */}
            <p className="text-gray-100 mr-4 text-wrap">{task}</p>
            {/* Delete button */}
            <button
              onClick={() => deleteTask(index)}
              className="bg-red-400 text-white px-4 py-1 cursor-pointer rounded-full hover:bg-red-500"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
    // </div>
  );
}

export default TaskList;
