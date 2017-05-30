import React from 'react'

const Slider = ({onMouseOver, onMouseOut, onMouseEnter, slider}) => {
  let className = `slide-${slider}`
  return (
  <li 
    className={className} 
    data-num={slider} 
    onMouseOver = {onMouseOver}
    onMouseOut = {onMouseOut}
    onMouseEnter = {onMouseEnter}
  >
  Slider-{slider} #
  </li>
)} 
export default Slider
