import Indicator from './Indicator'
import React from 'react'

let indicators = [1,2,3,4]
const IndicatorList = ({onIndicatorListClick, show}) => (
  <ul className='indicator'>
    {indicators.map(indicator =>
      <Indicator
        key={indicator} 
        onClick = {() => onIndicatorListClick(indicator)}
        show={show}
        indicator={indicator}
      ></Indicator>
    )}
  </ul>
)

export default IndicatorList
