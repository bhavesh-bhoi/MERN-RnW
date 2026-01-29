function TaskList({ tasks, deleteTask }) {
  return (
    <div className="max-w-5xl mx-auto bg-gray-200 p-6 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Task items */}
        {tasks.map((task, index) => {
          return (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center"
            >
              {/* Task content */}
              <p className="text-gray-700 mr-4">{task}</p>
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
    </div>
  );
}

export default TaskList;
