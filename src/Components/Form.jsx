import React, { useState } from 'react'
import '../Styles/formulario.scss'
import Card from './Card';

const Form = () => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    fraseFavorita: '',
    autor: ''
  })
  console.log(usuario);
  const [show, setShow] = useState(false)
  const [errors, setErrors] = useState({
    nombre: false,
    fraseFavorita: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { nombre, fraseFavorita, autor } = usuario

    const nombreOk = nombre.trim().length >= 3 && nombre.trim() === nombre
    const fraseOk = fraseFavorita.trim().length >= 6 && fraseFavorita.trim() === fraseFavorita

    const autorOk = autor.trim() !== '' ? autor : 'Autor desconocido';

    setUsuario({
      ...usuario,
      autor: autorOk
    });

    setErrors({
      nombre: !nombreOk,
      fraseFavorita: !fraseOk
    })

    setShow(nombreOk && fraseOk)
  }
  return (
    <>
      <form className="d-grid center g-10 formulario" onSubmit={handleSubmit}>
        <label>
          Dime tu nombre: 
          <input type="text" onChange={(e) => setUsuario({...usuario, nombre: e.target.value})}/>
        </label>
        {errors.nombre && <p className="error">Por favor chequea que la información sea correcta. (mínimo 3 caracteres y sin espacios al inicio).</p>}
        <label>
          ¿Cuál es tu frase favorita?: 
          <input type="text" onChange={(e) => setUsuario({...usuario, fraseFavorita: e.target.value})}/>
        </label>
        {errors.fraseFavorita && <p className="error">Por favor chequea que la información sea correcta. (mínimo 6 caracteres y sin espacios al inicio).</p>}
        <label>
          ¿Quien es el autor?: 
          <input type="text" onChange={(e) => setUsuario({...usuario, fraseFavorita: e.target.value})}/>
        </label>
        <button>Enviar</button>
      </form>
      {show && <Card usuario={usuario} />}
    </>
  )
}

export default Form