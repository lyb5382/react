import React, { useContext } from 'react'
import { Mycontext } from '../context/Mycontext'

const MyComponent = () => {
    const { value, setValue } = useContext(Mycontext)
    return (
        <div>
            <p>{value}</p>
            <button onClick={()=>setValue('update from component')}>update</button>
        </div>
    )
}

export default MyComponent