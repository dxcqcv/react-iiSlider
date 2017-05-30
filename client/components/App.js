import React from 'react'
import ControlNextButton from '../containers/ControlNextButton.js'
import ControlPrevButton from '../containers/ControlPrevButton.js'
import PrepareSliderList from '../containers/PrepareSliderList.js'
import SelectIndicator from '../containers/SelectIndicator.js'

const App = () => (
  <div className="iiSlider">
    <ControlNextButton></ControlNextButton>
    <ControlPrevButton></ControlPrevButton>
    <PrepareSliderList ></PrepareSliderList>
    <SelectIndicator></SelectIndicator>
  </div>
)

export default App;
