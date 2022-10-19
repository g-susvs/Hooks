import { render, screen } from '@testing-library/react'
import { UserContext } from '../../src/09-useContext/context/UserContext';
import {HomePage} from '../../src/09-useContext/HomePage';

describe('Pruebas <HomePage/>', () => { 
    const user = {
        id: 1,
        name: 'Jesús'
    }

    test('debe mostrar el componente sin el usuario', () => { 

        render(
            <UserContext.Provider value={{user:null}}>
                <HomePage />
            </UserContext.Provider>
        );
        const pre = screen.getByLabelText('pre')
        expect(pre.innerHTML).toBe('null')
     })

    test('debe mostrar el componente con el usuario', () => { 

        render(
            <UserContext.Provider value={{user}}>
                <HomePage />
            </UserContext.Provider>
        );
        const pre = screen.getByLabelText('pre')
        console.log(pre.innerHTML)
        expect(pre.innerHTML).toContain(user.name);
        expect(pre.innerHTML).toContain(user.id.toString());
     })


})