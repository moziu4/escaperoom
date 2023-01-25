export const DORMITORIO_DONE = 'DORMITORIO_DONE'
export const LAVABO_DONE = 'LAVABO_DONE'
export const PADRES_DONE = 'PADRES_DONE'
export const COCINA_DONE = 'COCINA_DONE'
export const SALON_DONE = 'SALON_DONE'


const dormitorioDone = () => {
  return {
    type: DORMITORIO_DONE,
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
