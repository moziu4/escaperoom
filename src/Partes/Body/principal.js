import Fondo from "./Pages/fondo"
import Dormitorio from "./Pages/dormitorio"
import Cocina from "./Pages/cocina"
import Padres from "./Pages/padres"
import Lavabo from "./Pages/lavabo"
import Salon from "./Pages/salon"
import { useSelector } from "react-redux"

const Principal = () => {
  const state = useSelector(state =>state)
  const donde= state.habitacion.habitacion
   
  if (donde === "Fondo")
    return (
      <div className="row contenedor Principal">
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
        <Lavabo/>
      </div>
    )

  if (donde === "Salon")
    return (
      <div className="row contenedor">
        <Salon />
      </div>
    )
}

export default Principal
