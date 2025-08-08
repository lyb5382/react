import React, { useMemo, useState } from 'react'

const SortableList = () => {
    const [keyword, setKeyword] = useState('')
    const [names] = useState(['David', 'Alice', 'Charlie', 'Bob'])
    const filtered = useMemo(() => {
        console.log('filtering...')
        return names.filter((name) => name.toLowerCase().includes(keyword.toLowerCase())).sort()
    }, [keyword, names])
    return (
        <div>
            <h2>useMemo 정렬리스트</h2>
            <input value={keyword} onChange={(e) => setKeyword(e.target.value)} type="text" />
            <ul>
                {filtered.map((name, i) => (
                    <li key={i}>{name}</li>
                ))}
            </ul>
        </div>
    )
}

export default SortableList