const Fooditem = () => {
  return <input type='text' placeholder='search food items' classNameName='form-control'
    onChange={
      (event) => console.log(event.target.value)} />
}

export default Fooditem;