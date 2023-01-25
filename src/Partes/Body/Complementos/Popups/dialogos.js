import React, { useState, useEffect } from "react"

const Dialogos = ({ comenzar, dialogos }) => {
  const [numero, setNumero] = useState(1)
  const [max, setMax] = useState(1)

  const conversa = dialogos.map((dialogo) => {
    const num = numero
    const dial = "Dialogo" + num
    const diaal = dialogo[dial]
    return diaal
  })

  useEffect(() => {
    const num = dialogos[0].n
    setMax(num)
  }, [])

  const adelante = () => {
    const suma = numero + 1
    setNumero(suma)
  }

  return (
    <div className="modalContent">
      <div className="popupContent">
        <div className="headerModal"> Instrucciones </div>
        <div className="contentModal">
          {" "}
          <div>{conversa}</div>
          <div>
            {max > numero && (
              <button className="botones-popUp" onClick={() => adelante()}>Siguiente</button>
            )}
            {max === numero && (
              <button className="botones-popUp" onClick={() => comenzar()}>Empezar</button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogos
