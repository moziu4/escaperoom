export const initialState = {
  habitacion: "Fondo",
  dormitorio: false,
  cocina: false,
  salon: false,
  padres: false,
  lavabo: false,
}


export default function useGOTOReducer (state = initialState, action){
  
  if (action.type === "IR_FONDO") {
    return {
      ...state,
      habitacion: action.payload,
    }
  }

  if (action.type === "IR_DORMITORIO") {
    return {
      ...state,
      habitacion: "Dormitorio",
    }
  }

  if (action.type === "IR_PADRES") {
    return {
      ...state,
      habitacion: "Padres",
    }
  }

  if (action.type === "IR_SALON") {
    return {
      ...state,
      habitacion: "Salon",
    }
  }

  if (action.type === "IR_COCINA") {
    return {
      ...state,
      habitacion: action.payload,
    }
  }
  if (action.type === "IR_LAVABO") {
    return {
      ...state,
      habitacion: action.payload,
    }
  }

  if (action.type === "DORMITORIO_DONE") {
    return {
      ...state,
      habitacion: "Fondo",
      dormitorio: action.payload,
    }
  }

  if (action.type === "PADRES_DONE") {
    return {
      ...state,
      habitacion: "Fondo",
      padres: action.payload,
    }
  }

  if (action.type === "SALON_DONE") {
    return {
      ...state,
      habitacion: "Fondo",
      salon: action.payload,
    }
  }

  if (action.type === "COCINA_DONE") {
    return {
      ...state,
      habitacion: "Fondo",
      cocina: action.payload,
    }
  }
  if (action.type === "LAVABO_DONE") {
    return {
      ...state,
      habitacion: "Fondo",
      lavabo: action.payload,
    }
  }

  return state
}

export const padresDone = () => {
  return {
    type: "PADRES_DONE",
    payload: true,
  }
}




