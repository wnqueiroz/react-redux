import React, { useState, useEffect } from 'react'

const getInitialStateFromProps = props => {
  const { number = 0 } = props
  return number
}

const getRandomNumber = () => Math.floor(Math.random() * 10)

export const CounterWithHooks = props => {
  const [number, setNumber] = useState(getInitialStateFromProps(props))

  const increment = num => setNumber(parseInt(num, 10) + 1)
  const decrement = num => setNumber(parseInt(num, 10) - 1)

  const checkIsEvenOrOdd = a => (a % 2 === 0 ? 'par' : 'impar')

  const [evenOrOdd, setEvenOrOdd] = useState(checkIsEvenOrOdd(number))

  useEffect(() => {
    setEvenOrOdd(checkIsEvenOrOdd(number))
  }, [number])

  return (
    <div>
      <div>
        O número <b>{number}</b> é {evenOrOdd}
      </div>
      <br />
      <button onClick={() => increment(number)} type="button">
        Incrementar +
      </button>
      <button onClick={() => decrement(number)} type="button">
        Decrementar -
      </button>
      <button
        onClick={() => increment(number + getRandomNumber())}
        type="button"
      >
        Incrementar aleatório +
      </button>
      <button
        onClick={() => decrement(number - getRandomNumber())}
        type="button"
      >
        Decrementar aleatório -
      </button>
    </div>
  )
}
