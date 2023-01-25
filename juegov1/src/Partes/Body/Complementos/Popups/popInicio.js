import { connect } from "react-redux"
import { comprobar } from "../../../../store/empezar/action"
import { useState } from "react"

const PopInicio = ({ comprobar }) => {
  const [codigo, setCodigo] = useState("")

  const handleChange = (event) => {
    
    const { value } = event.target
    setCodigo(value)
  }
  const comprobarRespuesta = () => {
    if (codigo === "Ola") {
      comprobar()
    } else {
      console.log("no correcto")
    }
  }

  return (
    <div className="modalContent">
      <div className="popupContent">
        <div className="headerModal"> ¡BIENVENIDO! </div>
        <div className="contentModal">
          {" "}
          Para empezar a jugar deberás introducir el código secreto
          
        </div>
        <form>
          <input
            type="text"
            name="codigo"
            value={codigo}
            placeholder="Password"
            onChange={handleChange}
            className="codigos"
          />
        </form>
        <button className="botones-popUp" onClick={() => comprobarRespuesta()}>Comprobar</button>
      </div>
    </div>
  )
}

export default connect(null, { comprobar })(PopInicio)
