import { useSelector } from "react-redux"
import { acabado } from "../../../store/empezar/reducer"

import techo from "../../../assets/techo.jpg"
import a1 from "../../../assets/a1.jpg"
import a2 from "../../../assets/a2.png"
import a3 from "../../../assets/a3.jpg"
import b1 from "../../../assets/b1.jpg"
import b2 from "../../../assets/b2.jpg"
import b3 from "../../../assets/b3.jpg"

import "bootstrap/dist/css/bootstrap.css"

import PopFin from "../Complementos/Popups/popFin"
import PopInicio from "../Complementos/Popups/popInicio"
import DormitorioPrin from "../Complementos/habitaciones/dormitorio"
import LavaboPrin from "../Complementos/habitaciones/lavabo"
import CocinaPrin from "../Complementos/habitaciones/cocina"
import PadresPrin from "../Complementos/habitaciones/padres"
import SalonPrin from "../Complementos/habitaciones/salon"


const Fondo = () => {
 
  const state = useSelector( state => state)
  
  const respuesta = acabado(state)
  const comienzo = state.empezarReducer.inicio
 
  return (
    <div className="row contenedor" id="general">
      <div className="row  anchoRow">
        <div className="col-md-2 col-2 espacioCuadro">
          <button className="botonCuadro">
            <img src={a1} alt="Cielo-A1" className="imagenesCuadrado" />
          </button>
        </div>

        <div className="col-md-4 col-4 espacioCuadro">
          <PadresPrin/>
        </div> 

        <div className="col-md-4 col-4 espacioCuadro">
          <button className="botonCuadro">
            <img src={techo} alt="Techo" className="imagenesCuadrado" />
          </button>
        </div>

        <div className="col-md-2 col-2 espacioCuadro">
          <button className="botonCuadro">
            <img src={b1} alt="Cielo-B1" className="imagenesCuadrado" />
          </button>
        </div>
      </div>
      <div className="row anchoRow">
        <div className="col-md-2 col-2 espacioCuadro">
          <button className="botonCuadro">
            <img src={a2} alt="Cielo-A2" className="imagenesCuadrado" />
          </button>
        </div>

        <div className="col-md-4 col-4 espacioCuadro">
        <DormitorioPrin/>
        </div>

        <div className="col-md-4 col-4 espacioCuadro">
         <LavaboPrin />
        </div>

        <div className="col-md-2 col-2 espacioCuadro">
          <button className="botonCuadro">
            <img src={b2} alt="Cielo-B2" className="imagenesCuadrado" />
          </button>
        </div>
      </div>
      <div className="row anchoRow">
        <div className="col-md-2 col-2 espacioCuadro">
          <button className="botonCuadro">
            <img src={a3} alt="Cielo-A3" className="imagenesCuadrado" />
          </button>
        </div>

        <div className="col-md-4 col-4 espacioCuadro">
          <SalonPrin/>
        </div>

        <div className="col-md-4 col-4 espacioCuadro">
          <CocinaPrin/>
        </div>

        <div className="col-md-2 col-2 espacioCuadro">
          <button className="botonCuadro">
            <img src={b3} alt="Cielo-B3" className="imagenesCuadrado" />
          </button>
        </div>
      </div>
      
      <div className={comienzo ? "inactivo" : "activo"}>
        <PopInicio />
  </div>
      <div className={respuesta ? "activo" : "inactivo"}>
        <PopFin />
      </div>
    </div>
  )
}

export default Fondo
