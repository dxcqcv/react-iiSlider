
import React from 'react'
import { connect } from 'react-redux'
import { prev} from '../actions'
import PrevButton from '../components/PrevButton.js'



const mapDispatchToProps = dispatch => {
  return {
    onPrevButtonClick: () => {
      dispatch(prev())
    }  
  }
}

const ControlPrevButton = connect(
  null,
  mapDispatchToProps
)(PrevButton)

export default ControlPrevButton
