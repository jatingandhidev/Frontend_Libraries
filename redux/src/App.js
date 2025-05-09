import './App.css'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  incrementBy,
  decrementBy,
  addIncrementDelay,
  addDecrementDelay,
} from './store'

function App() {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  const [value, setValue] = useState(0)
  return (
    <div className="App">
      <h1>{count}</h1>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(incrementBy(Number(value)))}>
        Increment
      </button>
      <button onClick={() => dispatch(decrementBy(Number(value)))}>
        Decrement
      </button>
      <button onClick={() => dispatch(addIncrementDelay(Number(value)))}>
        Increment Async
      </button>
      <button onClick={() => dispatch(addDecrementDelay(Number(value)))}>
        Decrement Async
      </button>
    </div>
  )
}

export default App
