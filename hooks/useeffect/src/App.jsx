import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // useEffect will update the page title whenever count changes
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log("Title updated!");
  }, [count]); // runs whenever 'count' changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default Counter;



