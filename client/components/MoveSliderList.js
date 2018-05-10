import Slider from './Slider'

import React from 'react'
import {Motion, spring} from 'react-motion'

const MoveSliderList = ({distance,sliders,updateCurrent}) => {
  return (
  <div>
    <Motion 
      key={sliders[1]} 
      defaultStyle={{x:0}} 
      style={{x:spring(distance)}}
      /*onRest={()=>dispatch(updateCurrent)}*/
      onRest={updateCurrent}>
      {({x}) =>
        <ul className='slider' style={{left:`${x}px`}}> 
          {sliders.map(slider => 
            <Slider
              key={slider}
              slider={slider}
            ></Slider>
          )}
        </ul>
      }
    </Motion>
  </div>
)} 
export default MoveSliderList