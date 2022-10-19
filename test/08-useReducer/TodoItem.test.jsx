import { fireEvent, render, screen } from '@testing-library/react';
import {TodoItem} from '../../src/08-useReducer/TodoItem';


describe('Pruebas <TodoItem />', () => { 

    const todo = {
        id: 1,
        description: 'Recolectar algo',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks());

    test('debe de regresar el valor inicial', () => { 

        render(<TodoItem  
            todo={todo} 
            onDeleteTodo={onDeleteTodoMock} 
            onToggleTodo={onToggleTodoMock} />);
        
        // screen.debug();
        const li = screen.getByRole( "listitem");
        expect(li.className).toBe('list-group-item d-flex justify-content-between');
        
        const span = screen.getByLabelText('span');
        expect(span.className).toBe('align-self-center pointer pe-auto ')

     })

    test('debe de mostrar el todo completado', () => { 

        todo.done = true;

        render(<TodoItem  
            todo={todo} 
            onDeleteTodo={onDeleteTodoMock} 
            onToggleTodo={onToggleTodoMock} />);
        
        const span = screen.getByLabelText('span');
        expect(span.className).toContain('text-decoration-line-through');

     })
     
     test('span debe de llamar ToggleTodo cuando se hace click', () => { 
 
         render(<TodoItem  
             todo={todo} 
             onDeleteTodo={onDeleteTodoMock} 
             onToggleTodo={onToggleTodoMock} />);
         
         const span = screen.getByLabelText('span');
         fireEvent.click( span );

         expect( onToggleTodoMock ).toHaveBeenCalledWith(todo.id);
 
      })
     test('button debe de llamar al DeleteTodo', () => { 
 
         render(<TodoItem  
             todo={todo} 
             onDeleteTodo={onDeleteTodoMock} 
             onToggleTodo={onToggleTodoMock} />);
         
         const button = screen.getByRole('button');
         fireEvent.click( button );

         expect( onDeleteTodoMock ).toHaveBeenCalledWith(todo.id);
 
      })

    })