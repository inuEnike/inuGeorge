import React from 'react'

const Button = ({font, text}) => {
  return (
    <div className={`px-5 outline py-2 outline-white outline-1 rounded-md ${font}`}>{text}</div>
  )
}

export default Button