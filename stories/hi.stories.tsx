import React from 'react'
import { storiesOf } from '@storybook/react'
import HiComponent from '../src/HiComponent'

storiesOf('Sample', module).add('Hi', () => {
  return <HiComponent></HiComponent>
})
