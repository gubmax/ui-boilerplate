import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import App from '@client/components/layout/App'

it('Renders without crashing', () => {
  const div = document.createElement('div')
  render(<App />, div)
  unmountComponentAtNode(div)
})
