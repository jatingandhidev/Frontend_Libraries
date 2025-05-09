import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Child = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div>
      <h1>{theme}</h1>
      <button onClick={() => toggleTheme()}>toggle</button>
    </div>
  )
}
export default Child
