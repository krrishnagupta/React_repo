import style from './button.module.css'

const ButtonContainer = ({ onButtonclicked }) => {
  const buttonNames = ["C", "AC", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];

  return <div classNameName={style.buttonContainer}>
    {buttonNames.map((button) => (
      <button key={button} classNameName={style.buttons} onClick={() => onButtonclicked(button)}>{button}</button>
    ))}
  </div>;
}

export default ButtonContainer;