import { useSelector } from "react-redux";

const DisplayCounter = () => {

  const counter = useSelector(store => store.counter);

  return (
    <p className="fs-5 mb-4 p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
      Counter value : {counter}
    </p>
  )
}

export default DisplayCounter;  