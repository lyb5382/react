import React, { useMemo, useState } from 'react'

const Squarecalc = () => {
    const [num, setNum] = useState(0)
    const [count, setCount] = useState(0)
    const squared = useMemo(() => {
        console.log('제곱')
        return num*num
    }, [num])
    return (
        <div>
            <h2>useMemo 예제: 숫자의 제곱</h2>
            <input value={num} onChange={(e) => setNum(Number(e.target.value))} type="number" />
            <p>{num}의 제곱: {squared}</p>
            <button onClick={() => setCount(count + 1)}>카운트 증가: {count}</button>
        </div>
    )
}

export default Squarecalc