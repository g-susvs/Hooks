import React from "react";
export const ShowIncrement = React.memo(({increment}) => {

    console.log('oh, me renderizo ;)');

    return (
        <button
        className="btn btn-primary"
         onClick={()=> increment(5)} 
         >+ 1</button>
    )
})
