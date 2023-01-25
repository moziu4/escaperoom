export const IRFONDO = "IR_FONDO"
export const IRDORMITORIO = "IR_DORMITORIO"
export const IRPADRES = "IR_PADRES"
export const IRLAVABO = "IR_LAVABO"
export const IRCOCINA = "IR_COCINA"
export const IRSALON = "IR_SALON"

export const habitacion = {
  fondo: 'Fondo',
  dormitorio: 'Dormitorio',
  padres: 'Padres',
  cocina: 'Cocina',
  lavabo: 'Lavabo',
  salon: 'Salon'
}

const irFondo = () => {
  return {
    type: IRFONDO,
    payload: habitacion.fondo,
  }
}

const irDormitorio = () => {
  return {
    type: IRDORMITORIO,
    payload: habitacion.dormitorio,
  }
}

const irPadres = () => {
  return {
    type: IRPADRES,
    payload: habitacion.padres,
  }
}

const irSalon = () => {
  return {
    type: IRSALON,
    payload: habitacion.salon,
  }
}

const irCocina = () => {
  return {
    type: IRCOCINA,
    payload: habitacion.cocina,
  }
}

const irLavabo = () => {
  return {
    type: IRLAVABO,
    payload: habitacion.lavabo,
  }
}

export { irFondo, irDormitorio, irPadres, irSalon, irCocina, irLavabo }
