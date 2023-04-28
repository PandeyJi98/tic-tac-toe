import React from 'react'
import "./ReSetButton.css"
const ReSetButton = ({reSetBoard}) => {
  return (
 <button className='reset-button' onClick={reSetBoard}>Reset Board</button>
  )
}

export default ReSetButton