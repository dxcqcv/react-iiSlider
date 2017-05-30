import React from 'react'
import { connect } from 'react-redux'
import SliderList from '../components/SliderList.js'

const mapStateToProps = state => {
  return {
    show: state.show,
    current: state.current
  }
}

const PrepareSliderList = connect(mapStateToProps)(SliderList)

export default PrepareSliderList
