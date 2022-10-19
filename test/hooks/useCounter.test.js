import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import {useCounter} from '../../src/hooks/useCounter';

describe('Pruebas useCounter', () => { 
    test('Debe de retornar los valores por defecto', () => {

        const { result } = renderHook(() => useCounter());
        const {counter, decrement, increment, reset} = result.current;

        expect(counter).toBe(10);
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    })
    test('El valor inicial debe de ser de 100', ()=> {
        const {result} = renderHook(()=> useCounter(100));
        const {counter} = result.current;
        
        expect(counter).toBe(100);
    })
    
    test('Debe incrementar el contador', () => { 
        const {result} = renderHook(()=> useCounter(100));
        const {increment} = result.current;
        act(()=>{
            increment();
            increment();
        })

        expect(result.current.counter).toBe(102)
    })
    test('Debe decrementar el contador', () => { 
        const {result} = renderHook(()=> useCounter(100));
        const {decrement} = result.current;
        act(()=>{
            decrement();
            decrement();
        })
        
        expect(result.current.counter).toBe(98)
    })
    
    test('Debe de hacer el reset', () => { 
        const {result} = renderHook(()=> useCounter(100));
        const {increment, reset} = result.current;

        act(()=>{
            increment();
            increment();
            reset();
        })
        
        expect(result.current.counter).toBe(100)
        
     })
 })