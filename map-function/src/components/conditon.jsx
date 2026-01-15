
function ConditionRendering() {

  let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']
  // let fruits = [];

  // if(fruits.length === 0){         {/* Conditional Rendering  by if-else condtion*/}
  //   return <h2>No fruits available</h2>
  // }

  return <>
    <h2 classNameName="red bg-dark">Fruits List</h2>
    {/* {fruits.length === 0 ? <h2>by ternary opertor the fruits are not avaiable</h2> : null}  */}
    {/*condion rendering by ternary operator ⬆️ */}

    {fruits.length === 0 && <h2 classNameName="bg-danger">by the logical operater the fruits are not available</h2>}
    {/* condion rendering by logical AND operater ⬆️  */}

    <ul classNameName="list-group">
      {fruits.map((fruits) => (<li key={fruits} classNameName="list-group-item">{fruits}
        <button classNameName="btn btn-info btn-md float-end"
          onClick={() => alert(`You have bought ${fruits}`)}
        >Buy</button>
      </li>))}
    </ul>
  </>
}


export default ConditionRendering;