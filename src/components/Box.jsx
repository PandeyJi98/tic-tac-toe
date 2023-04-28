import React from 'react'
import "./Box.css"
const Box = ({value, onClick}) => {
  const style = value === "x" ? "box X" : "box O";
  return (
    <button className={style} onClick={onClick}>{value}</button>
  )
}

export default Box;