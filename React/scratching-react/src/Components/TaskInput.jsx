import { useState } from "react";

function TaskInput({ addTask }) {
  // State to hold input text
  const [text, setText] = useState("");

  return (
    <div className="flex justify-center gap-3 mb-10">
      <input
        value={text}
        // Collect value from input field
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task..."
        className="w-full max-w-md text-md bg-white text-black px-5 py-2 rounded-full outline-none"
      />
      <button
        // Add task on button click
        onClick={() => {
          addTask(text);
          setText("");
        }}
        className="bg-green-400 text-black font-bold px-6 py-2 cursor-pointer rounded-full hover:bg-green-500"
      >
        Add
      </button>
    </div>
  );
}

export default TaskInput;
