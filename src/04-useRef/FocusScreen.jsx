import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        console.log(inputRef);
        inputRef.current.select();
    }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr />

            <input
                ref={inputRef}
                className='form-control'
                type="text"
                placeholder='Ingresa un texto' />

            <button
                onClick={onClick}
                className='btn btn-primary mt-2'>Focus</button>
        </>
    )
}
