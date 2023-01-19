import react, { useState } from "react"

const Nombre = ({finalizado}) => {
  const [nombre, setNombre] = useState(null)
  const [correcto, setCorrecto] = useState(false)

  const handleChange = (event) => {
    const { value } = event.target
    setNombre(value)
  }
  const comprobarRespuesta = () => {
    if (nombre === "ola") {
      finalizado()
    } else {
      console.log("no correcto")
      setCorrecto(true)
    }
  }

  return (
    <div>
      <h2>¿Sabes cual es mi nombre?</h2>
      <form>
        <input
          name="Nombre"
          type="text"
          value={nombre}
          placeholder="Nombre"
          onChange={handleChange}
          className="codigos"
        />
      </form>

      <button className="botones btnNombre" onClick={() => comprobarRespuesta()}>
        Comprobar
      </button>
      {correcto && <p className="error">No has acertado</p>}
    </div>
  )
}

export default Nombre
