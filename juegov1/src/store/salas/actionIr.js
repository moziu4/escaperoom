const irFondo = () => {
  return {
    type: "IR_FONDO",
    payload: "Fondo",
  }
}

const irDormitorio = () => {
  return {
    type: "IR_DORMITORIO",
    payload: "Dormitorio",
  }
}

const irPadres = () => {
  return {
    type: "IR_PADRES",
    payload: "Padres",
  }
}

const irSalon = () => {
  return {
    type: "IR_SALON",
    payload: "Salon",
  }
}

const irCocina = () => {
  return {
    type: "IR_COCINA",
    payload: "Cocina",
  }
}

const irLavabo = () => {
  return {
    type: "IR_LAVABO",
    payload: "Lavabo",
  }
}

export { irFondo, irDormitorio, irPadres, irSalon, irCocina, irLavabo }
