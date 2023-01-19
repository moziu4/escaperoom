import { connect } from "react-redux"
import lavabo from "../../../../assets/lavabo.jpg"
import "bootstrap/dist/css/bootstrap.css"
import { irLavabo } from "../../../../store/salas/actionIr"


const lavaboHecho = (state) => {
    return {
        hecho: state.habitacion.lavabo
    }
}

const LavaboPrin = ({irLavabo, hecho}) => {
    return (
        <button className="botonCuadro" disabled={hecho} onClick={() => irLavabo()}>
            <img
              src={lavabo}
              alt="Lavabo"
              className={`${hecho ? "cuadroInactivo" : "cuadroActivo"}`}
            />
          </button>
    )
}

export default connect(lavaboHecho,{irLavabo}) (LavaboPrin)