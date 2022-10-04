import React from 'react'
import ReactDOM from 'react-dom/client'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-example/MultipleCustomHooks'
// import { CounterApp } from './01-useState/CounterApp'
// import { HookApp } from './HookApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { Comparation } from './05-useLayoutEffect/Comparation'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-useMemo/Memorize'
// import { MemoHook } from './06-useMemo/MemoHook'
// import { CallbackHook } from './06-useMemo/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <TodoApp />
  // </React.StrictMode>
)
