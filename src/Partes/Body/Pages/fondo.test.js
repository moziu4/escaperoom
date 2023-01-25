import '@testing-library/jest-dom/extend-expect'
import * as reactRedux from 'react-redux'
import { Provider } from "react-redux";
import { createStore } from "redux";
import useInicioReducer, { initialState } from '../../../store/empezar/reducer'
import { render ,screen} from '@testing-library/react'
import Fondo from './fondo'

function renderWithProviders(ui, { reduxState } = {}) {
    const store = createStore(useInicioReducer, reduxState || initialState);
    return render(<Provider store={store}>{ui}</Provider>);
  }



describe('Pantalla Principal', () => {
   

   beforeEach(() =>{
    renderWithProviders(<Fondo />, {
        reduxState: {
          empezarReducer: {
            inicio: false
          },
          habitacion:{
            cocina:true,
            dormitorio:true,
            padres:true,
            lavabo:false,
            salon:false,
            
          }
        }
        
      })
      
   })

   test("Renderiza fondo Cielo A1", () => {

          screen.getByAltText('Cielo-A1')
          
    });
    test("Renderiza fondo Techo", () => {

        screen.getByAltText('Techo')
        
  });
  test("Renderiza fondo Cielo A2", () => {

    screen.getByAltText('Cielo-A2')
    
});
test("Renderiza fondo Cielo A3", () => {

    screen.getByAltText('Cielo-A3')
    
});
test("Renderiza fondo Cielo B1", () => {

    screen.getByAltText('Cielo-B1')
    
});
test("Renderiza fondo Cielo B2", () => {

    screen.getByAltText('Cielo-B2')
    
});
test("Renderiza fondo Cielo B3", () => {

    screen.getByAltText('Cielo-B3')
    
});
})