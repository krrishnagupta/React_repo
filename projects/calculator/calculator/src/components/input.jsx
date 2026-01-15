import style from './input.module.css'

function Inputarea({ displayvalue }) {
  return (
    <input type="text" classNameName={style.inputarea} value={displayvalue} readOnly></input>
  )
}

export default Inputarea
