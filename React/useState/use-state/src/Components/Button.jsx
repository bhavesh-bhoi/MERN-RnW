import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter(Mini Project)</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Button;
