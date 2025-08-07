import React, { useRef } from 'react'

const Counter = () => {
    const countRef = useRef(0)
    const increas = ()=>{
        countRef.current+=1
        console.log(`count ${countRef.current}`)
    }
    return (
        <div>
            <p>count num: {countRef.current}</p>
            <button onClick={increas}>+1</button>
        </div>
    )
}

export default Counter