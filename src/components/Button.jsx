import React from 'react'

const Button = ({ color, text }) => {
  return (
    <div>
        <button style={{ backgroundColor: color }}>{text}</button>
    </div>
  )
}

export default Button