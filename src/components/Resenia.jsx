import React, { useContext } from 'react'
import '../styles/Css/Resenia.css'
import { DarkModeContext } from '../context/DarkModeContext';

function Resenia({nombre, cuerpo}) {

  const { darkMode } = useContext(DarkModeContext);

  return (
    <article className={`reseña ${darkMode ? 'dark-mode' : ''}`}>
        <h2>{nombre}</h2>
        <p>{cuerpo}</p>
    </article>
  )
}


export default Resenia