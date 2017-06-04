import React from 'react'
import { connect } from 'react-redux'
import SliderList from '../components/SliderList.js'

const mapStateToProps = state => {
  return {
    distance: state.distance,
    sliders: state.sliders
  }
}

const PrepareSliderList = connect(mapStateToProps)(SliderList)

export default PrepareSliderList
