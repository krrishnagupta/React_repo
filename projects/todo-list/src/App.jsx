import './App.css'
import Heading from './components/heading'
import AddTodo from './components/addtodo'
import Todoitems from './components/todoitems'
import Welcomemessage from './components/welcome'
import { useState } from 'react'
import { TodoItemsContext } from './store/todo-items-store'

function App() {


  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDuedate) => {
    const newItem = [...todoItems, { item: itemName, date: itemDuedate }]
    setTodoItems(newItem);
  }

  const handleDelete = (itemName) => {
    const newList = todoItems.filter((todo) => todo.item != itemName);
    setTodoItems(newList);
  }

  return (
    <TodoItemsContext.Provider>
      <center classNameName="todoContainer">
        <Heading />
        <AddTodo onNewitem={handleNewItem} />
        {todoItems.length === 0 && <Welcomemessage />}
        <Todoitems todolist={todoItems} onDeletclick={handleDelete} />
      </center>
    </TodoItemsContext.Provider>
  )
}

export default App
