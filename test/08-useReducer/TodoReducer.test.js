import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Pruebas en TodoReducer', () => { 

    const initialState = [
        {
            id: 1,
            description:'demo todo',
            done: false
        }
    ]

    test('debe regresar el valor inicial', () => { 

        const newArrTodo =todoReducer(initialState, {});
        expect(newArrTodo).toBe(initialState);
        
    })
    
    test('debe agregar un todo', () => { 
        
        const action = {
            type:'[TODO] add todo',
            payload:{
                id:2,
                description:'#2 TODO',
                done: false
            }
        }
        
        const newArrTodo =todoReducer(initialState, action);
        expect(newArrTodo).toContain(action.payload);
        
    })
    
    test('debe eliminar el todo', () => { 

        const action = {
            type:'[TODO] delete todo',
            payload:1
        }
        const newArrTodo =todoReducer(initialState, action);
        
        expect(newArrTodo).toHaveLength(0);
        
    })
    
    test('debe de realizar el toggle del todo', () => { 
        const action = {
            type:'[TODO] toggle todo',
            payload:1
        }
        const newArrTodo =todoReducer(initialState, action);

        expect(newArrTodo[0].done).toBeTruthy();
        
     })

 })