import React, { useState } from 'react'

const Ex3 = () => {
  const [input, setInput] = useState('')
  const changeInput = (e) => {
    setInput(e.target.value)
  }
  const resetInput = () => {
    setInput('')
  }
  console.log(input)
  return (
    <div>
      <h2>input</h2>
      <input value={input} onChange={changeInput} type='text' />
      <button onChange={resetInput}>reset</button>
    </div>
  )
}

export default Ex3