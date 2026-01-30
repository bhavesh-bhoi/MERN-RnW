import { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function NotesManager() {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  function addTask(task) {
    setTasks([...tasks, task]);
  }

  // Function to delete a task by index
  function deleteTask(index) {
    const updatedTasks = [];

    for (let i = 0; i < tasks.length; i++) {
      if (i !== index) {
        updatedTasks.push(tasks[i]);
      }
    }

    setTasks(updatedTasks);
  }

  return (
    <div className="bg-black min-h-screen py-10">
      <h1 className="text-center text-white font-bold text-4xl mb-10">
        Notes Manager
      </h1>

      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default NotesManager;
