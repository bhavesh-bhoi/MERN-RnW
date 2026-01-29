import { useState } from "react";

function Counter() {
  // State to hold count value
  const [count, setCount] = useState(0);

  //   Function to increment count
  function countIncrement() {
    setCount(count + 1);
  }

  //   Function to decrement count
  function countDecrement() {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="font-bold text-4xl mb-8">Counter App</h1>

      <div className="flex items-center gap-6 bg-gray-800 p-8 rounded-xl shadow-lg">
        <button
          onClick={countDecrement}
          className="w-14 h-14 flex items-center cursor-pointer justify-center text-2xl font-bold bg-gray-200 text-black rounded-full hover:bg-gray-400"
        >
          -
        </button>

        <span className="text-6xl font-bold w-28 text-center">{count}</span>

        <button
          onClick={countIncrement}
          className="w-14 h-14 flex items-center cursor-pointer justify-center text-2xl font-bold bg-gray-200 text-black rounded-full hover:bg-gray-400"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
