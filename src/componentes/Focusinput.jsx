import React, { useRef } from 'react'

const Focusinput = () => {
    const inpuRef = useRef(null)
    const focusInput=()=>{
        inpuRef.current.focus()
    }
    return (
        <div>
            <input type='text' ref={inpuRef} placeholder='click focurs' />
            <button onClick={focusInput}>focurs</button>
        </div>
    )
}

export default Focusinput