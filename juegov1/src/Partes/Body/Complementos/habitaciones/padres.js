import { connect } from "react-redux"
import padres from "../../../../assets/guardilla.jpg"
import "bootstrap/dist/css/bootstrap.css"
import { irPadres } from "../../../../store/salas/actionIr"


const padresHecho = (state) => {
    return {
        hecho: state.habitacion.padres
    }
}

const PadresPrin = ({irPadres, hecho}) => {
    return (
        <button className="botonCuadro" disabled={hecho} onClick={() => irPadres()}>
            <img
              src={padres}
              alt="Padres"
              className={`${hecho ? "cuadroInactivo" : "cuadroActivo"}`}
            />
          </button>
    )
}

export default connect(padresHecho,{irPadres}) (PadresPrin)