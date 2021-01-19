import React from 'react'

export default function inputForm(props){
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count + 1)}>
                Count up to the moon
            </button>
        </div>
    )

}