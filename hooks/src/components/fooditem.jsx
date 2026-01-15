
const Fooditem = ({ handlekeydown, value, handleOnchange }) => {
  return <input type='text'
    placeholder='search food items'
    classNameName='form-control my-3'
    onKeyDown={handlekeydown}
    value={value}
    onChange={handleOnchange} />
}

export default Fooditem;