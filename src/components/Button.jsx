import PropTypes from "prop-types";
import styles from "../styles/Button.module.css";
export default function Button({ texto, esBotonClick, manejarClick }) {
  
  return (
    <button
      className={
        esBotonClick === true
          ? `${styles.button} ${styles.buttonClick}`
          : `${styles.button} ${styles.buttonReiniciar}`
      }
      onClick={manejarClick}
    >
      {texto}
    </button>
  );
}

Button.propTypes = {
  texto: PropTypes.string.isRequired,
  esBotonClick: PropTypes.bool.isRequired,
  manejarClick: PropTypes.func.isRequired,
}
