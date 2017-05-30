import Slider from './Slider'
import {updateCurrent } from '../actions'
import React from 'react'

//class SliderList extends React.Component {
  
//}

const SliderList = ({show, current,dispatch}) => {

  const N = 4
  let sliders = [...Array(N+1).keys()].slice(1)
  sliders = reorderArray(sliders, sliders.length-1,0)

  if(show > current) sliders = reorderArray(sliders, sliders.indexOf(show),2) 
  else sliders = reorderArray(sliders, sliders.indexOf(show),0)
  // move
  dispatch(updateCurrent(show) )

  return (
  <ul className='slider'> //move(left800)>
    {sliders.map(slider => 
      <Slider
        key={slider}
        slider={slider}
      ></Slider>
    )}
  </ul>
)} 

function reorderArray(arr, oldIdx, newIdx) {
  // arr must be array
  if(arr.constructor !== Array) return
  // copy a new Array
  const copiedArr = [...arr] 
  // if idx is negative make it positive
  while(oldIdx < 0) oldIdx += copiedArr.length 
  while(newIdx < 0) newIdx += copiedArr.length 
  //if newIdx is greater than length, push undefined to that position
  if(newIdx >= copiedArr.length) {
    let k = newIdx - copiedArr.length
    while((k--)+1) copiedArr.push(undefined)
  }
  copiedArr.splice(newIdx, 0, copiedArr.splice(oldIdx, 1)[0]) 
  return copiedArr
}

export default SliderList
