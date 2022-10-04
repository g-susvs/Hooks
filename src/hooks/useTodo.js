import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const initialState = []

const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || []
}
export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    const todosCount = todos.length

    const pendingTodosCount = (todos.filter(todo => !todo.done)).length

    useEffect(() => {

        localStorage.setItem('todos',JSON.stringify(todos));

    }, [todos])
    

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] add todo',
            payload: todo
        }
        dispatch(action)
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] delete todo',
            payload: id
        })
    }
    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] toggle todo',
            payload: id
        })
    }
    

    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}