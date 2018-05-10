import React from 'react'
import MoveSliderList from './MoveSliderList'


// class sliderlist extends component {
//   constructor(props) {
//     super(props)
//   } 

// }

const SliderList = ({/*show, current,*/distance,sliders,updateCurrent}) => {

  //const N = 4
  //let sliders = [...Array(N+1).keys()].slice(1)
  //sliders = reorderArray(sliders, sliders.length-1,0)

  //if(show > current) sliders = reorderArray(sliders, sliders.indexOf(show),2) 
  //else sliders = reorderArray(sliders, sliders.indexOf(show),0)
  //// move
  //dispatch(updateCurrent(show) )

return (
  <div>
    <MoveSliderList distance={distance} sliders={sliders} updateCurrent={updateCurrent} ></MoveSliderList>
  </div>
)} 



export default SliderList

