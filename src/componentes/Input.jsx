import React from 'react'

const input = ({ inputValue, title, placeholder }) => {
    const onClickButton=()=>{
        console.log(`input is "${inputValue}"`)
    }
    return (
        <div>
            <h2>{title}</h2>
            <input value={inputValue} type='text' placeholder={placeholder} />
            <button onClick={onClickButton}>click!</button>
        </div>
    )
}

export default input