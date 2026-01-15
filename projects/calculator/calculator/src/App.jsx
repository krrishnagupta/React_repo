import Inputarea from './components/input.jsx'
import ButtonContainer from './components/buttons.jsx'
import './App.css'
import { useState } from 'react'


function App() {

  let [value, setvalue] = useState("");

  const onButtonclicked = (buttonText) => {
    if (buttonText === "AC") {
      setvalue("");

    } else if (buttonText === "C") {
      setvalue(value.slice(0, -1));

    } else if (buttonText === "=") {
      let result = eval(value);
      setvalue(result);

    } else {
      const newDisplayvalue = value + buttonText;
      setvalue(newDisplayvalue);
    }
  }

  return (
    <div classNameName='maincontainer'>
      <h6 classNameName='color'>Calculator</h6>
      <Inputarea displayvalue={value} />
      <ButtonContainer onButtonclicked={onButtonclicked} />
    </div>
  )
}

export default App
