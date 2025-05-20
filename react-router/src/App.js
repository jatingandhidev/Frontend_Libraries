import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './Home'
import About from './About'
import Param from './Param'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":param" element={<Param />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
