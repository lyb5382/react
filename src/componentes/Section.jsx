import React from 'react'
import './Section.css'

const Section = () => {
  const Article = () => {
    const user = {
      name: 'Alice',
      isLogin: false
    }
    return (
      <div>
        {user.isLogin ?
          (<div className='login'>로그인</div>) :
          (<div className='logout'>로그아웃</div>)
        }
      </div>
    )
  }
  return (
    <section>Section</section>
  )
}

export default Section