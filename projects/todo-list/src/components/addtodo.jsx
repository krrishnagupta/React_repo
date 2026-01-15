import style from './addtodo.module.css';
import { useState } from 'react';
import { IoMdAdd } from "react-icons/io";


function AddTodo({ onNewitem }) {

  const [inputText, setInputText] = useState("");
  const [inputDate, setInputDate] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  }

  const handleDateChange = (event) => {
    setInputDate(event.target.value);
  }

  const handleAddClick = () => {
    onNewitem(inputText, inputDate);
    setInputText("");
    setInputDate("");
  }

  return <div classNameName="container todoItems">
    <div classNameName="row new-row">
      <div classNameName="col-6">
        <input classNameName={style.todoAdd} type="text" placeholder='Enter Todo here'
          value={inputText} onChange={handleInputChange}></input>
      </div>
      <div classNameName="col-4">
        <input classNameName={style.todoAdd} type='date' value={inputDate} onChange={handleDateChange}></input>
      </div>
      <div classNameName="col-2">
        <button type="button" classNameName="btn btn-success new-btn"
          onClick={handleAddClick}>
          <IoMdAdd />
        </button>
      </div>
    </div>
  </div>
}

export default AddTodo;