import React from 'react'

const INITIAL_STATE = {
  number: 0
}

export class Counter extends React.Component {
  constructor(props) {
    super(props)
    const { number } = this.props

    this.state = { ...INITIAL_STATE, number: parseInt(number, 10) || 0 }
  }

  increment = number => {
    this.setState({ number: number + 1 })
  }

  decrement = number => {
    this.setState({ number: number - 1 })
  }

  render() {
    const { number } = this.state
    return (
      <div>
        <div>Número: {number}</div>
        <button onClick={() => this.increment(number)} type="button">
          Incrementar
        </button>
        <button onClick={() => this.decrement(number)} type="button">
          Decrementar
        </button>
      </div>
    )
  }
}
