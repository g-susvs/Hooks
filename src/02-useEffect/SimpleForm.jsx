import { useEffect } from "react";
import { useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'jesus',
        email: 'jesus@test.com'
    })

    const { username, email } = formState;

    const onInputChange = (event) => {
        const { value, name } = event.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }
    useEffect(() => {
        // console.log('Effect username');

    }, [username])
    useEffect(() => {
        // console.log('Effect email');

    }, [email])


    return (
        <>
            <h1>SimpleForm</h1>

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
            {
                (username === 'jesus2') && <Message />
            }
        </>

    )


}
