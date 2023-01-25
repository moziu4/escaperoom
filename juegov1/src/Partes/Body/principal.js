import Fondo from "./Pages/fondo"
import Dormitorio from "./Pages/dormitorio"
import { connect } from "react-redux"
import { queHabitacionES } from "../../store/salas/reducer"
import Cocina from "./Pages/cocina"
import Padres from "./Pages/padres"
import Lavabo from "./Pages/lavabo"
import Salon from "./Pages/salon"
import Puzzle from "../Puzzle/puzzle"

const queHabitacion = (state) => {
  return {
    donde: queHabitacionES(state),
  }
}

const Principal = ({ donde }) => {
  if (donde === "Fondo")
    return (
      <div className="row contenedor">
        <Fondo />
      </div>
    )

  if (donde === "Dormitorio")
    return (
      <div className="row contenedor">
        <Dormitorio />
      </div>
    )

  if (donde === "Cocina")
    return (
      <div className="row contenedor">
        <Cocina />
      </div>
    )

  if (donde === "Padres")
    return (
      <div className="row contenedor">
        <Padres />
      </div>
    )

  if (donde === "Lavabo")
    return (
      <div className="row contenedor">
        <Puzzle/>
      </div>
    )

  if (donde === "Salon")
    return (
      <div className="row contenedor">
        <Salon />
      </div>
    )
}

export default connect(queHabitacion, null)(Principal)
