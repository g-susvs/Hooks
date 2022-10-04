import React from 'react'

export const Small = React.memo(({value}) => {

    console.log('Me estoy renderizando ;)')
    
    return (
        <small>{value}</small>
    )
})
