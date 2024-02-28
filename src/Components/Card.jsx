import React from 'react'
import '../Styles/card.scss'

const Card = ({usuario}) => {
  const { nombre, fraseFavorita, autor } = usuario
  console.log(usuario);
  return (
    <>
      <div className="d-grid card g-15">
        <div className='deco'></div>
        <h2>Hola, {nombre}!</h2>
        <p>"{fraseFavorita}" - <span>{autor}</span></p>
      </div>
    </>
  )
}

export default Card