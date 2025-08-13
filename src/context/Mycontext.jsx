import React, { useState } from 'react'
import { MyContext } from './Mycontext'

export const Mycontext = ({ children }) => {
    const [value, setValue] = useState('hello context!')
    return (
        <MyContext.Provider value={{ value, setValue }}>
            {children}
        </MyContext.Provider>
    )
}

export default Mycontext