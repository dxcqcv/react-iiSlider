import ControlButton from './ControlButton.js'
import React from 'react'

const PrevButton = ({onPrevButtonClick}) => (
  <a className='control_prev'>
    <ControlButton dir='prev' onClick={onPrevButtonClick}></ControlButton>
  </a>
)

export default PrevButton
