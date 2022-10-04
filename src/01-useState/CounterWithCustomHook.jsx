import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const {counter, decrement, increment ,reset} = useCounter();

  return (
    <>
        <h1>CounterWithCustomHook: {counter}</h1>

        <button className='btn btn-primary m-3' onClick={() => increment(2)}>+1</button>
        <button className='btn btn-primary m-3' onClick={() => reset()}>Reset</button>
        <button className='btn btn-primary m-3' onClick={() => decrement(2)}>-1</button>
    </>
  )
}
