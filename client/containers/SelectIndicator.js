import {connect} from 'react-redux'
import {selector} from '../actions'
import IndicatorList from '../components/IndicatorList.js' 
import React from 'react'


const mapStateToProps = state => {
  return {show:state.show}
}

const mapDispatchToProps = dispatch => {
  return {
    onIndicatorListClick: show => {
      dispatch(selector(show))
    }
  }
}

const SelectIndicator = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndicatorList)

export default SelectIndicator
