import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router'

const Home = () => {
  const [param, setParam] = useState('')

  let navigate = useNavigate()
  const handleParamNav = () => {
    if (param === '') {
      navigate(0)
    }
  }
  return (
    <div>
      <h1>Home</h1>
      <NavLink className="navlinks" to="/about">
        Go to About
      </NavLink>
      <input
        type="text"
        value={param}
        onChange={(e) => setParam(e.target.value)}
      />
      <NavLink className="navlinks" to={`${param}`} onClick={handleParamNav}>
        Go to Param
      </NavLink>
      <Outlet />
    </div>
  )
}
export default Home
