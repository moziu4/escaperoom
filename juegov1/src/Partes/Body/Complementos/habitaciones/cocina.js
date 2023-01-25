import { connect } from "react-redux"
import cocina from "../../../../assets/cocina.jpg"
import "bootstrap/dist/css/bootstrap.css"
import { irCocina } from "../../../../store/salas/actionIr"


const cocinaHecho = (state) => {
    return {
        hecho: state.habitacion.cocina
    }
}

const CocinaPrin = ({irCocina, hecho}) => {
    return (
        <button className="botonCuadro" disabled={hecho} onClick={() => irCocina()}>
            <img
              src={cocina}
              alt="Cocina"
              className={`${hecho ? "cuadroInactivo" : "cuadroActivo"}`}
            />
          </button>
    )
}

export default connect(cocinaHecho,{irCocina}) (CocinaPrin)