import React, { useState } from 'react'

const Ex2 = () => {
  const [text, setText] = useState('Hello')
  const clickButton=()=>{
    text==='Hello'? setText('Bye') : setText('Hello')
  }
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={clickButton}>click</button>
    </div>
  )
}

export default Ex2