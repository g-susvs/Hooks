import { useState } from 'react';
import {useCounter} from '../hooks';
import { Small } from './Small';

export const Memorize = () => {

    const {counter, increment} = useCounter();

    const [show, setShow] = useState(true);

    const onShowAndHide = ()=>{
        show? setShow(false):setShow(true);
    }

  return (
    <>
        <h1>Counter: <Small value={counter} /></h1>

        <button onClick={()=>increment()} className="btn btn-primary" >+ 1</button>

        <button 
        onClick={()=>onShowAndHide()}
        className="btn btn-primary ms-3" >show/hide: {JSON.stringify(show)}</button>
    </>
  )
}
