import React from 'react'

// const Button = (props) => {
//   return (
//     <button style={{color: props.color}}>
//         {props.text}
//     </button>
//   )
// }
const Button = ({ text, color = 'dimgrey', children = null }) => {
    const onClickButton=(e)=>{
        console.log(e)
        console.log(text)
    }
    return (
        <button style={{ color: color }} onClick={onClickButton}>
            {text.toUpperCase()}
            {children}
        </button>
    )
}

export default Button