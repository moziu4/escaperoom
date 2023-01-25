import { connect } from "react-redux"
import lavabo from "../../../assets/lavabo.jpg"
import { lavaboDone } from "../../../store/salas/actionDone"
import { irFondo } from "../../../store/salas/actionIr"
import Snakejuego from "../../Snake"

const Lavabo = ({ lavaboDone, irFondo }) => {
  return (
    <div className="row contenedor">
      <div className="col-md-6 centrarImagen">
        <img src={lavabo} className="imagenHabitacion" />
      </div>

      <div className="col-md-6 centrarText centrarImagen">
        <div className="textoHabitacion">
          <h2 className="tituloRoom">Lavabo</h2>
          <p className="textoRoom">
            Lorem ipsum dolor sit amet consectetur adipiscing elit id aptent,
            blandit hendrerit imperdiet praesent sapien est nec aenean
            fringilla, scelerisque ridiculus dictumst sociosqu sed nisi varius
            semper. Class urna quis commodo litora ultrices vulputate quam
            praesent dictum, mauris sociis fermentum blandit gravida eros
            parturient viverra, mollis dignissim lacus fames in enim dapibus
            duis. Justo habitasse arcu luctus magnis senectus praesent velit
            netus convallis donec tortor eu massa cursus, mattis dui enim dis
            phasellus nibh in purus nascetur nec cubilia felis mauris.
          </p>
        </div>
      </div>

      <div className="col-md-4 row centrarText centrarImagen botonera">
        <div className="col-md-6 centrarText centrarImagen">
          <button onClick={() => lavaboDone()} className="botones">
            Completado
          </button>
        </div>

        <div className="col-md-6 centrarText centrarImagen">
          <button onClick={() => irFondo()} className="botones">
            Átras
          </button>
        </div>
      </div>
    </div>
  )
}

export default connect(null, { lavaboDone, irFondo })(Lavabo)
