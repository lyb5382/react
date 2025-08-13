import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const Display = () => {
    const { count } = useContext(CounterContext)
    return (
        <div>Display</div>
    )
}

export default Display