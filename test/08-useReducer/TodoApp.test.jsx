import { render, screen } from "@testing-library/react";
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodo } from '../../src/hooks/useTodo';

jest.mock('../../src/hooks/useTodo');

describe('Pruebas <TodoApp />', () => { 

    useTodo.mockReturnValue({
        todos:[
            {id:1, description:'#1', done:false},
            {id:2, description:'#2', done:true}
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn()
    })

    test('debe de mostrar el componente correctamente', () => { 

        render(<TodoApp />);

        expect(screen.getByText('#1')).toBeTruthy();
        expect(screen.getByText('#2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();

     })

 })