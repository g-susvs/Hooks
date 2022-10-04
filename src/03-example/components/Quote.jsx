import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({quote, author}) => {


    const [boxSize, setboxSize] = useState({
        width:0,
        height:0
    })

    const pRef = useRef()

    useLayoutEffect(() => {
        const {height, width} = pRef.current.getBoundingClientRect();
        setboxSize({
            width,
            height
        })
    }, [quote])


    return (
        <>
            <blockquote style={{display:'flex'}} className="blockquote text-end">
                <p ref={pRef} className="mb-2">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>
            <p>{JSON.stringify(boxSize)}</p>
        </>
    )
}
