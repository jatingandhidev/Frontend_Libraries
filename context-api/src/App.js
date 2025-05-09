import { useState } from 'react'
import './App.css'
import Child from './Child'
import { ThemeContext } from './ThemeContext'

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Child />
    </ThemeContext.Provider>
  )
}

export default App
