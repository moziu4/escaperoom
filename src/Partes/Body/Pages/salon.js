import { connect } from "react-redux"
import salon from "../../../assets/salon.jpg"
import { salonDone } from "../../../store/salas/actionDone"
import { irFondo } from "../../../store/salas/actionIr"

const Salon = ({ salonDone, irFondo }) => {
  return (
    <div className="row contenedor">
      <div className="col-md-6 centrarImagen">
        <img src={salon} className="imagenHabitacion" alt="Salón de la casa"/>
      </div>

      <div className="col-md-6 centrarText centrarImagen">
        <div className="textoHabitacion">
          <h2 className="tituloRoom">Salón</h2>
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
          <button onClick={() => salonDone()} className="botones">
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

export default connect(null, { salonDone, irFondo })(Salon)
