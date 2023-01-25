import { connect } from "react-redux"
import salon from "../../../../assets/salon.jpg"
import "bootstrap/dist/css/bootstrap.css"
import { irSalon } from "../../../../store/salas/actionIr"


const salonHecho = (state) => {
    return {
        hecho: state.habitacion.salon
    }
}

const SalonPrin = ({irSalon, hecho}) => {
    return (
        <button className="botonCuadro" disabled={hecho} onClick={() => irSalon()}>
            <img
              src={salon}
              alt="Salon"
              className={`${hecho ? "cuadroInactivo" : "cuadroActivo"}`}
            />
          </button>
    )
}

export default connect(salonHecho,{irSalon}) (SalonPrin)