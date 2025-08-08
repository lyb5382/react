import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserList = () => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(null)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            setUser(res.data)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            setErr('데이터 가져오기 실패')
            setLoading(false)
        })
    }, [])
    if (loading) return <p>Loading...</p>
    if (err) return <p>{err}</p>
    return (
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {user.map((u, i) => (
                    <li key={i}>{u.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default UserList