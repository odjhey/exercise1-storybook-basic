import React from 'react'
import * as ReactDOM from 'react-dom'
import HiComponent from '../src/HiComponent'

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<HiComponent />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
