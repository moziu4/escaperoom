export const initialState = {
  inicio: false
}

export default function useInicioReducer(state = initialState, action){
  if (action.type === "EMPEZAR") {
    return {
      ...state,
      inicio: true,
    }
  }

  return state
}



export const acabado = (state) => {
  if (
    state.habitacion.cocina === true &&
    state.habitacion.dormitorio === true &&
    state.habitacion.padres === true &&
    state.habitacion.lavabo === true &&
    state.habitacion.salon === true
  ) {
    return true
  }
  return false
}
