import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { json } from "react-router-dom";

describe('Pruebas <LoginPage />', () => { 

    test('debe de mostrar el componente sin el usuario', () => { 

        render(
            <UserContext.Provider value={{user:null}}>
                <LoginPage />
            </UserContext.Provider>
        )
        // screen.debug();
        const pre = screen.getByLabelText('pre');
        expect(pre.innerHTML).toBe('null')
        
    })
    
    test('debe llamar el setUser cuando se hace click en el boton', () => { 

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{user:null, setUser: setUserMock}}>
            <LoginPage />
            </UserContext.Provider>
        )
        screen.debug();
        const btn = screen.getByRole('button');
        // expect(btn).toBeTruthy();
        fireEvent.click(btn);

        expect(setUserMock).toHaveBeenNthCalledWith({ id: 123, name: 'Jesus VS', email: 'jesus@test.com' });

      })

 })