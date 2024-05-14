
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div>
      <h2>Navbar</h2>
      <Outlet/>
      <h2>Footer</h2>
    </div>
  )
}

export default App
