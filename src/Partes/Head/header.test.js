import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react";
import Header from "./header";

describe('Header',()=>{
    test('Renderiza',()=>{
        const view = render(<Header />)
       expect(view.container).toHaveTextContent('LA SORPRESA')
})

})