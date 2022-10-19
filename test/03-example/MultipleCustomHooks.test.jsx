import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-example/MultipleCustomHooks";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";


jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");



describe('Pruebas en <MultipleCustomHooks/>', () => { 

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    beforeEach( ()=>{
        jest.clearAllMocks();
    })

    test('Debe de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data:null,
            isLoading: true,
            hasError: null
        })

        render(<MultipleCustomHooks/>);

        expect(screen.getByText('Breaking Bad quotes'))
        expect(screen.getByText('Loading...'))
        const button = screen.getByRole('button',{name:'Next quote'})

        expect(button.disabled).toBeTruthy()
        // screen.debug()
     })

    test('Debe mostrar el Quote', () => { 
        useFetch.mockReturnValue({
            data:[{author: 'Jesus', quote: 'hola mundo'}],
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHooks/>);
        
        expect(screen.getByText('Breaking Bad quotes'))
        expect(screen.getByText('Jesus'))
        expect(screen.getByText('hola mundo'))
        const button = screen.getByRole('button',{name:'Next quote'})
        
        expect(button.disabled).toBeFalsy()
        
    })
    
    test('Debe llamar a la función incrementar', () => { 
        useFetch.mockReturnValue({
            data:[{author: 'Jesus', quote: 'hola mundo'}],
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHooks/>);
        const button = screen.getByRole('button',{name:'Next quote'});

        fireEvent.click(button);

        expect(mockIncrement).toHaveBeenCalled();
     })

 })