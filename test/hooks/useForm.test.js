import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import {useForm} from '../../src/hooks/useForm';


describe('Prueba useForm', () => { 
    const initialValue = {
        name: 'Jesus',
        email: 'jsus@test.com'
    }

    test('Debe de regresar el valor inicial', () => {

        const {result} = renderHook( () => useForm(initialValue));
        expect(result.current).toEqual({
            name: initialValue.name,
            email: initialValue.email,
            formState: initialValue,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        })
    })
    
    test('Debe de cambiar el nombre del formulario', () => { 
        const newValue = 'Juan';

        const {result} = renderHook( () => useForm(initialValue));
        const {onInputChange} = result.current;

        act(() =>{
            onInputChange({target:{name: 'name', value: newValue}});
        })
        expect(result.current.name).toBe('Juan');
        expect(result.current.formState.name).toBe('Juan');

    })
    test('Debe de regresar al valor inicial', () => { 
        const newValue = 'Juan';

        const {result} = renderHook( () => useForm(initialValue));
        const {onInputChange, onResetForm} = result.current;
        
        act(() =>{
            onInputChange({target:{name: 'name', value: newValue}});
            onResetForm()
        })
        expect(result.current.formState).toBe(initialValue);

    })
 })