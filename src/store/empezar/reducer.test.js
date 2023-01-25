import '@testing-library/jest-dom/extend-expect'
import { comprobar, EMPEZAR } from './action'
import useInicioReducer, { acabado, initialState } from './reducer'
describe('Actions de reducer Empezamos', () =>{
    test('Comprobar Action' , () => {
        const action = comprobar()
        expect(action.type).toEqual(EMPEZAR)
        expect(action.payload).toBeTruthy()
    })
})

describe( 'Reducer de Empezar juego', ()=>{
    test('Retirar PopUp de Inicio juego', () => {
        const action = comprobar()
        const result = useInicioReducer(initialState, action)
        expect(result.inicio).toBeTruthy()
    })
})

describe( 'Reducer de Finalizar juego', ()=>{
    test('Inicio PopUp de Fin juego', () => {
        const state = {habitacion:{
        cocina : true, 
        dormitorio : true,
        padres : true, 
        lavabo : true,
        salon : true
        }}
        const result = acabado(state)
        expect(result).toBeTruthy()
    })
})