
const initialState = [{
    id:1,
    todo:'Lavar platos',
    done:false
}]

const todoReducer = (state = initialState, action= {}) => {

    if(action.type == '[ADD TODO]') return [...state, action.payload];

    return state
}


const addNewTodo = {
    type:'[ADD TODO]',
    payload:{
        id:2,
        todo:'Leer',
        done: false
    }
}

const todos = todoReducer(undefined,addNewTodo);

console.log(todos);