import React from 'react'
import { connect } from 'react-redux'
import SliderList from '../components/SliderList.js'
import {updateCurrent } from '../actions'

const mapStateToProps = state => {
  return {
    distance: state.distance,
    sliders: state.sliders
  }
}
const mapDispatchToProps = dispatch => {
  return {
    updateCurrent: () => {
      dispatch(updateCurrent)
    }
  }
}

const PrepareSliderList = connect(
  mapStateToProps,
  mapDispatchToProps
  )(SliderList)

export default PrepareSliderList
