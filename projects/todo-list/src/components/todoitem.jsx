import style from './todoitem.module.css';
import { MdDeleteForever } from "react-icons/md";

function Todoitem({ item, date, onDeletclick }) {
  return <div classNameName="container">
    <div classNameName="row new-row">
      <div classNameName="col-6">
        <p classNameName={style.itempara}>{item}</p>
      </div>
      <div classNameName="col-4">
        <p classNameName={style.itempara}>{date}</p>
      </div>
      <div classNameName="col-2">
        <button type="button" classNameName="btn btn-danger new-btn"
          onClick={() => onDeletclick(item)}
        ><MdDeleteForever /></button>
      </div>
    </div>
  </div>
}

export default Todoitem;