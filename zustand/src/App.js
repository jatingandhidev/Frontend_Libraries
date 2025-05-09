import useStore from './store'
import './App.css'

function App() {
  const count = useStore((state) => state.count)
  const increaseCount = useStore((state) => state.increaseCount)
  const increaseCountAsync = useStore((state) => state.increaseCountAsync)
  const resetCount = useStore((state) => state.resetCount)

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => increaseCount()}>Increase</button>
      <button onClick={() => increaseCountAsync()}>Increase Async</button>
      <button onClick={() => resetCount()}>Reset</button>
    </div>
  )
}

export default App
