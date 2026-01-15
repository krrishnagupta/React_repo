import styles from './errormessage.module.css';

function Errormessage({ fooditem }) {
  return <>
    {fooditem.length === 0 ? <p classNameName={styles.hungry}>I am hungry</p> : null}
  </>
}

export default Errormessage;