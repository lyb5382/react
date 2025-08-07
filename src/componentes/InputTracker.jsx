import React, { useRef, useState } from 'react'

const inputTracker = () => {
    const renderCount = useRef(0)
    const [text, setText] = useState('')
    renderCount.current += 1
    const change = (e) => {
        setText(e.target.value)
    }
    return (
        <div>
            <input type='text' value={text} onChange={change} />
            <p>렌더링 : {renderCount.current}</p>
        </div>
    )
}

export default inputTracker