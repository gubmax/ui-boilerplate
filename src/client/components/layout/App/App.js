import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from '@actions/../store'
import Page from '../Page'

const App = () => (
  <Provider store={store}>
    <Router>
      <Page />
    </Router>
  </Provider>
)

export default App
