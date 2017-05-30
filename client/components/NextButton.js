import ControlButton from './ControlButton.js'
import React from 'react'


const NextButton = ({onNextButtonClick}) => (
  <a className='control_next'>
    <ControlButton dir='next' onClick={onNextButtonClick}></ControlButton>
  </a>
)

export default NextButton
