import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({x:0,y:0})
    useEffect(() => {
      
      const onMouseEvent = ({x, y})=> {
        setCoords({x,y});
      }

      window.addEventListener('mousemove',onMouseEvent);
    
      return () => {
        window.removeEventListener('mousemove', onMouseEvent);
      }
    }, [])
    

  return (
    <>
        <h1>Usuario ya existe</h1>
        {JSON.stringify(coords)}
    </>
  )
}
