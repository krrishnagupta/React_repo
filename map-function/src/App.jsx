import './App.css'
import Fooditem from './components/onchange';
import ConditionRendering from './components/conditon';
import Container from './components/container';
import Counter from './components/usecase';
import { useState } from 'react';
function App() {

  const fooditem = ['apple', 'banana', 'grapes', 'mango'];

  const [count, setcount] = useState("The item entered by the customer is: ");


}

return <>
  <Container>
    <Fooditem></Fooditem>
    <h1>List of food items</h1>
    <ul classNameName='list-group'>
      {fooditem.map((item) => (<li key={item} classNameName='list-group-item'>{item}</li>))}
    </ul>
    <Counter></Counter>
    <Container />
    <h1>Conditional Rendering</h1>
    <ConditionRendering />
  </Container>
  <Container>
    <p>Children passing is a special prop that allows you to pass components as data to other components. In this example, the Container component wraps its children (the content passed between its opening and closing tags) inside a div with a className of "container" [in App.jsx file]. This is useful for creating reusable layout components that can encapsulate styling or structure while allowing dynamic content to be inserted.  </p>
  </Container>

</>

}

export default App
