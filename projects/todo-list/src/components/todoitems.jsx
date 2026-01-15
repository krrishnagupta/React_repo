import Todoitem from "./todoitem";

const Todoitems = ({ todolist, onDeletclick }) => {
  return (
    <div classNameName="todoItems">
      {todolist.map((todo, index) => (
        <Todoitem key={index} item={todo.item} date={todo.date} onDeletclick={onDeletclick} />
      ))}
    </div>
  )
}

export default Todoitems;