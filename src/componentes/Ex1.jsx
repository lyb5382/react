import React from 'react'
import ('./Ex1.css')

const Ex1 = ({name, age}) => {
  return (
    <div>
        <p>
            안녕 나는 <span className='name'>{name}</span>이고 <span className='age'>{age}</span>살 이야
            </p>
    </div>
  )
}

export default Ex1