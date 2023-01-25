const initialState = {
  palabra: false,
}

export default (state = initialState, action) => {
  if (action.type === "EMPEZAR") {
    return {
      ...state,
      palabra: true,
    }
  }

  return state
}

export const empezamos = (state) => {
  return state.empezarReducer.palabra
}
