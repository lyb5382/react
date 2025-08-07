import React, { useEffect, useState } from 'react'

const Life = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("mount")
        return () => { console.log("unmount") }
    }, [])
    useEffect(()=>{
        if(count>0){
            console.log(`count update: ${count}`)
        }
    },[count])
    return (
        <div>
            <p>click count: {count}</p>
            <button onClick={()=>{setCount(prev=>prev+1)}}>click me</button>
        </div>
    )
}

export default Life