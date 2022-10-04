import { useMemo, useState } from 'react';
import {useCounter} from '../hooks';

const heavyStuff = (iterationNumber) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahi vamo');
    }
    return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {

    const {counter, increment} = useCounter(100);

    const [show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])


  return (
    <>
        <h1>Counter: <small>{counter}</small></h1>
        <hr />
        <h4>{ memorizedValue}</h4>

        <button onClick={()=>increment()} className="btn btn-primary" >+ 1</button>

        <button 
        onClick={()=>setShow(!show)}
        className="btn btn-primary ms-3" >show/hide: {JSON.stringify(show)}</button>
    </>
  )
}
