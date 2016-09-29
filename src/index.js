import React from 'react'
import ReactDOM from 'react-dom'

const Hello = ({fn, ln}) => {
  return (<h1>Hello, { fn } { ln }</h1>)
}

ReactDOM.render(
  <Hello
    fn={'Arnupharp'}
    ln={'Viratanapanu'}
  />,
  document.getElementById('react-root')
)