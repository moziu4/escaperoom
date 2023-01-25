const dormitorioDone = () => {
  return {
    type: "DORMITORIO_DONE",
    payload: true,
  }
}

const lavaboDone = () => {
  return {
    type: "LAVABO_DONE",
    payload: true,
  }
}

const cocinaDone = () => {
  return {
    type: "COCINA_DONE",
    payload: true,
  }
}

const salonDone = () => {
  return {
    type: "SALON_DONE",
    payload: true,
  }
}

const padresDone = () => {
  return {
    type: "PADRES_DONE",
    payload: true,
  }
}

export { dormitorioDone, cocinaDone, lavaboDone, salonDone, padresDone }
