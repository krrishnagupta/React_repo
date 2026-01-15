import { useReducer } from "react";

const reducer = (count, action) => {
  switch(action.type) {
    case "increment_value":
      return count + 1;
    case "decrement_value":
      return count - 1;
    case "reset_value":
      return count = 0;
    default:
      return count;
  }
}

function App() {

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
    <h2>count:{count}</h2>
    <button
      onClick={() => dispatch({type:"increment_value"})}
    >click +</button>
    <button
      onClick={() => dispatch({type:"decrement_value"})}
    >click - </button>

    <button
      onClick={() => dispatch({type:"reset_value"})}
    >reset</button>
    
    </>
  )
}

export default App
