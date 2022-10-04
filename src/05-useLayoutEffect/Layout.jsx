import { useCounter, useFetch } from "../hooks";
import { Button, Loading, Quote } from "../03-example/components";

export const Layout = () => {

  const {counter,increment, decrement} = useCounter(1);

  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  
  const { author, quote } = !!data && data[0];
  return (
    <>
      <h1>Breaking Bad quotes</h1>
      <hr />

      { isLoading && (<Loading />) }

      { !isLoading && (<Quote author={author} quote={quote} />) }

      {
        (counter > 1 )
        ?<Button func={decrement} disabled={isLoading} content={"Previus"} />
        : null
      }
      
      <Button func={increment} disabled={isLoading} content={"Nex quote"} />
      
    </>
  )
}
