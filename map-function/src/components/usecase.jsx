import {useState} from 'react';

function Counter() {
  let [count, setCount] = useState(0);
  // count = current value (React remembers it)
  // setCount = function to update the value
  // useState(0) = initial value is 0


  return <><button onClick={() => setCount(count+1)}>Click me</button>
  <p>You clicked {count} times</p>
  {console.log(count)}
  </>
}
export default Counter;