import '@testing-library/jest-dom/extend-expect'
import { dormitorioDone, padresDone, lavaboDone, cocinaDone, salonDone, DORMITORIO_DONE, PADRES_DONE, LAVABO_DONE,COCINA_DONE, SALON_DONE } from "./actionDone";
import { IRFONDO, IRCOCINA, IRDORMITORIO, IRLAVABO, IRPADRES, IRSALON ,habitacion, irFondo, irDormitorio, irPadres, irSalon, irCocina, irLavabo } from './actionIr';
import useGOTOReducer, {initialState} from './reducer' 
describe('Acciones Habitaciones hechas', () =>{ 
    test('Dormitorio Done', ()=>{
        const action = dormitorioDone()
        expect(action.type).toEqual(DORMITORIO_DONE)
        expect(action.payload).toBeTruthy()
    })

    test('Padres Done', ()=>{
        const action = padresDone()
        expect(action.type).toEqual(PADRES_DONE)
        expect(action.payload).toBeTruthy()
    })

    test('Lavabo Done', ()=>{
        const action = lavaboDone()
        expect(action.type).toEqual(LAVABO_DONE)
        expect(action.payload).toBeTruthy()
    })

    test('Cocina Done', ()=>{
        const action = cocinaDone()
        expect(action.type).toEqual(COCINA_DONE)
        expect(action.payload).toBeTruthy()
    })

    test('Salon Done', ()=>{
        const action = salonDone()
        expect(action.type).toEqual(SALON_DONE)
        expect(action.payload).toBeTruthy()
    })
    
})

describe('Acciones ir habitacion', ()=>{
    test('Ir a Pantalla principal', ()=>{
        const action = irFondo()
        expect(action.type).toEqual(IRFONDO)
        expect(action.payload).toEqual(habitacion.fondo)
    })

    test('Ir a Dormitorio', ()=>{
        const action = irDormitorio()
        expect(action.type).toEqual(IRDORMITORIO)
        expect(action.payload).toEqual(habitacion.dormitorio)
    })
    test('Ir a Padres', ()=>{
        const action = irPadres()
        expect(action.type).toEqual(IRPADRES)
        expect(action.payload).toEqual(habitacion.padres)
    })
    test('Ir a Lavabo', ()=>{
        const action = irLavabo()
        expect(action.type).toEqual(IRLAVABO)
        expect(action.payload).toEqual(habitacion.lavabo)
    })
    test('Ir a Cocina', ()=>{
        const action = irCocina()
        expect(action.type).toEqual(IRCOCINA)
        expect(action.payload).toEqual(habitacion.cocina)
    })
    test('Ir a Salon', ()=>{
        const action = irSalon()
        expect(action.type).toEqual(IRSALON)
        expect(action.payload).toEqual(habitacion.salon)
    })
})

describe('reducer', ()=>{
    test('Ir a ahbitaciones', ()=>{
        const action = irDormitorio()
       
        const result = useGOTOReducer(initialState,action)
        expect(result.habitacion).toEqual('Dormitorio')
        
    })

    test('Habitacion hecha', ()=>{
        const action = dormitorioDone()
        const result = useGOTOReducer(initialState,action)
        expect (result.dormitorio).toBeTruthy()
    })
})
