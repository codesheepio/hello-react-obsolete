import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
    this.addCounter = this.addCounter.bind(this)
  }
  addCounter() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render() {
    return (
      <div className="counter">
        <h1>{this.props.label}</h1>
        <h2>{this.state.counter}</h2>
        <button onClick={this.addCounter}>+1</button>
      </div>
    )
  }
}