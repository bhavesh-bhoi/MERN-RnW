import { useReducer } from "react";

function Counter(state, action) {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };

    case "Decrement":
      return { count: state.count > 0 ? state.count - 1 : 0 };

    default:
      return state;
  }
}

function Button() {
  const [state, dispatch] = useReducer(Counter, { count: 0 });

  return (
    <div>
      <h1>Counter Mini Project</h1>
      <h3>Count : {state.count}</h3>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
    </div>
  );
}

export default Button;
