import { connect } from "react-redux"
import dormitorio from "../../../../assets/dormitorio.jpg"
import "bootstrap/dist/css/bootstrap.css"
import { irDormitorio } from "../../../../store/salas/actionIr"


const dormitorioHecho = (state) => {
    return {
        hecho: state.habitacion.dormitorio
    }
}

const DormitorioPrin = ({irDormitorio, hecho}) => {
    return (
        <button className="botonCuadro" disabled={hecho} onClick={() => irDormitorio()}>
            <img
              src={dormitorio}
              alt="Dormitorio"
              className={`${hecho ? "cuadroInactivo" : "cuadroActivo"}`}
            />
          </button>
    )
}

export default connect(dormitorioHecho,{irDormitorio}) (DormitorioPrin)