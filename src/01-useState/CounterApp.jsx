import React from 'react'
import { useState } from 'react'

export const CounterApp = () => {

    // const [{counter1,counter2,counter3}, setCounter] = useState({
    const [state, setCounter] = useState({
        counter1:10,
        counter2:20,
        counter3:30,
    })

    const {counter1,counter2,counter3} = state;

    const increment=()=>{
        setCounter({
            ...state,
            counter1: counter1+1
        });
    }

  return (
    <>
        <h1>Counter: {counter1 }</h1>
        <h1>Counter: {counter2 }</h1>
        <h1>Counter: {counter3 }</h1>

        <button 
        className='btn'
        onClick={increment}>+1</button>
    </>
  )
}
