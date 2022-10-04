import { useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm, username, email, password} = useForm({
        username: '',
        email: '',
        password:''
    });

    // const { username, email, password } = formState;
    
    return (
        <>
            <h1>Form with custom hook</h1>

            <input
                className='form-control'
                type="text"
                placeholder='Username'
                name='username'
                value={username}
                onChange={onInputChange} />
            <input
                className='form-control mt-2'
                type="email"
                placeholder='ex@example.com'
                name='email'
                value={email}
                onChange={onInputChange} />
            <input
                className='form-control mt-2'
                type="password"
                placeholder='Ingresa tu contraseña'
                name='password'
                value={password}
                onChange={onInputChange} />

            <button onClick={onResetForm} className="btn btn-danger mt-2" >Borrar</button>


            {
                (username === 'jesus2') && <Message />
            }
        </>

    )


}
