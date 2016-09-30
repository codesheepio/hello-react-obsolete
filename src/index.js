import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'

ReactDOM.render(
  <Counter label={'I\'m a counter'} />,
  document.getElementById('react-root')
)