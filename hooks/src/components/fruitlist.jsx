function Fruitlist({ fooditem, activeItem, onBuybutton }) {

  return <>
    <ul classNameName="list-group">
      {fooditem.map((item) => (
        <li key={item} classNameName={`list-group-item mt-1 ${activeItem.includes(item) ? 'active' : ''}`}>
          {item}
          <button classNameName="btn btn-info btn-md float-end"
            onClick={() => onBuybutton(item)}
          > Buy </button>
        </li>))}
    </ul>
  </>
}

export default Fruitlist;