import PropTypes from 'prop-types'
import styles from '../styles/Contador.module.css'
export default function Contador({ numClicks }) {
  return (
    <div className={styles.contador}>
      {numClicks}
    </div>
  )
}

Contador.propTypes = {
  numClicks: PropTypes.number.isRequired,
}
