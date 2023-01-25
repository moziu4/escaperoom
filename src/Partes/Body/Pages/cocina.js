import { connect } from "react-redux"
import { useCallback, useState } from "react"
import cocina from "../../../assets/cocina.jpg"
import { cocinaDone } from "../../../store/salas/actionDone"
import { irFondo } from "../../../store/salas/actionIr"
import Dialogos from "../Complementos/Popups/dialogos"
import { dialogos } from "../../../assets/jsons/dialogo1"
import Nombre from "../Complementos/nombre"

const Cocina = ({ irFondo, cocinaDone }) => {
  const habitacion = dialogos

  const [empezar, setEmpezar] = useState(true)
  const [completado, setCompletado] = useState(false)

  const comenzar = useCallback(() => {
    setEmpezar(false)
  }, [])

  const finalizado = useCallback(() => {
    setCompletado(true)
  }, [])

  return (
    <div className="row contenedor">
      {empezar && <Dialogos comenzar={comenzar} dialogos={habitacion} />}
      <div className="col-md-6 centrarImagen">
        <img src={cocina} alt="Cocina" className="imagenHabitacion" />
      </div>

      <div className="col-md-6 centrarText centrarImagen centrarVertical nombreHabitacion">
        {!completado && <Nombre finalizado={finalizado}/>}
        {completado && (
          <div>
            <h2>
              Mi Nombre es Juan.
              <br /> Muchas gracias por tu ayuda
            </h2>
            <div className="col-md-6 centrarText centrarImagen">
              <button onClick={() => cocinaDone()} className="botones">
                Completado
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="col-md-4 row centrarText centrarImagen botonera">
        <div className="col-md-6 centrarText centrarImagen">
          <button onClick={() => irFondo()} className="botones ">
            Átras
          </button>
        </div>
      </div>
    </div>
  )
}
export default connect(null, { cocinaDone, irFondo })(Cocina)
