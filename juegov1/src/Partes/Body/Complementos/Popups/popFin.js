import React from "react"

const PopFin = (props) => {
  return (
    <div className="modalContent">
      <div className="popupContent">
        <div className="headerModal"> ¡ENHORABUENA! </div>
        <div className="contentModal">
          {" "}
          Has superado todas las pruebas del juego. ¿Te gustaria recibir tu
          premio?
          <br /> Has ganado una entradas para el scaperoom.
        </div>
        <button
          className="buttonModal"
          onClick={() => {
            console.log("modal closed ")
          }}
        >
          Visitar Scaperoom
        </button>
      </div>
    </div>
  )
}

export default PopFin
