
import './App.css'
import Fooditem from './components/fooditem';
import Fruitlist from './components/fruitlist';
import Errormessage from './components/errormessage';
import { useState } from 'react';

function App() {

  let [fooditem, setfooditem] = useState([]);
  let [foodvalue, setfoodvalue] = useState("");
  let [activeItem, setActiveitem] = useState([]);


  function onKeyDown(event) {
    if (event.key === 'Enter') {
      let newFooditem = (event.target.value);
      let newItem = [...fooditem, newFooditem];
      setfooditem(newItem);
      setfoodvalue("");
    }
  }

  let onBuybutton = (item) => {
    let newActiveitem = [...activeItem, item];
    setActiveitem(newActiveitem);
  }

  function onChange(event) {
    setfoodvalue(event.target.value);
  }

  return <>
    <div classNameName="container app">
      <h1 classNameName='text-center'>Food items</h1>
      <Errormessage fooditem={fooditem} />
      <Fooditem value={foodvalue} handlekeydown={onKeyDown} handleOnchange={onChange} />
      <Fruitlist fooditem={fooditem}
        activeItem={activeItem}
        onBuybutton={onBuybutton}
      ></Fruitlist>
    </div>
  </>

}

export default App;
