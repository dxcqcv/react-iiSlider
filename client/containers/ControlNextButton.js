import React from 'react'
import { connect } from 'react-redux'
import { next} from '../actions'
import NextButton from '../components/NextButton.js'


const mapDispatchToProps = dispatch => {
  return {
    onNextButtonClick: () => {
      dispatch(next())
    }  
  }
}

const ControlNextButton = connect(
  null,
  mapDispatchToProps
)(NextButton)

export default ControlNextButton
