import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import goto from './reducers'
import App from './components/App'
//import Demo from './components/TestMotion'

import './styles/style.styl'

let store = createStore(goto,
  // redux-devtools-extension
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


render(
  
  <Provider store={store}>
    <App></App>
  </Provider>,
  
  //<Demo></Demo>,
  document.getElementById('root')
)
