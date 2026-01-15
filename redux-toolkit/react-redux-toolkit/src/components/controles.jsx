import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";
import { useDispatch } from "react-redux"

const Controles = () => {

  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(counterActions.increase())
  }

  const handleDecrease = () => {
    dispatch(counterActions.decrease())
  }

   const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle())
  }

  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" fdprocessedid="n4pehw"
        onClick={handleIncrease}>
        Increase +1
      </button>
      <button type="button" className="btn btn-outline-danger btn-lg px-4" fdprocessedid="ej0iwl" 
        onClick={handleDecrease}>
        Decrease -1
      </button>
      <button type="button" className="privacyP btn btn-outline-warning btn-lg px-4" fdprocessedid="ej0iwl" 
        onClick={handlePrivacyToggle}>
        Toggle Privacy
      </button>
    </div>
  )
}

export default Controles;