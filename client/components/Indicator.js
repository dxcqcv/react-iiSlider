
import React from 'react'
const Indicator = ({onClick ,indicator, show}) => {
  //console.log(indicator, show)
  const className = (indicator == show) ? 'active' :''
  return (
    <li
      onClick = {onClick}
      data-idx='1' 
      className = {className} 
    ></li>
  )

} 
export default Indicator
