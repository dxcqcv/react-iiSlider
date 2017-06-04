import Slider from './Slider'
import {updateCurrent } from '../actions'
import React from 'react'
import {Motion, spring} from 'react-motion'

//class SliderList extends Component {
  //constructor(props) 
//}

const SliderList = ({/*show, current,*/distance,sliders,dispatch}) => {

  //const N = 4
  //let sliders = [...Array(N+1).keys()].slice(1)
  //sliders = reorderArray(sliders, sliders.length-1,0)

  //if(show > current) sliders = reorderArray(sliders, sliders.indexOf(show),2) 
  //else sliders = reorderArray(sliders, sliders.indexOf(show),0)
  //// move
  //dispatch(updateCurrent(show) )

return (
  <div>
    <Motion 
      key={sliders[1]} 
      defaultStyle={{x:0}} 
      style={{x:spring(distance)}}
      onRest={()=>dispatch(updateCurrent)}>
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



export default SliderList

