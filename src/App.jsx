import { useState } from 'react'
import styles from './App.module.css'
import Button from "./components/Button"
import Contador from "./components/Contador"

function App() {
  
  const [numClicks, setNumClicks] = useState(0)

  const manejarClick = () => {
    setNumClicks(numClicks + 1)
  }
  const reiniciarClick = () => {
    setNumClicks(0)
  }

  const regresarClick = () => {
    setNumClicks(numClicks - 1)
  }
  return (
    <>
      <div className={styles.App}>
        <div className={styles.contenedor}>
          <Contador numClicks={numClicks} />
          <Button texto='Click' esBotonClick={true} manejarClick={manejarClick} />
          <Button texto='Devolver' esBotonClick={true} manejarClick={regresarClick} />
          <Button texto='Reiniciar' esBotonClick={false} manejarClick={reiniciarClick} />
        </div>
      </div>
    </>
  )
}

export default App
