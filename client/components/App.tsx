import Nav from './Nav.tsx'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="title">
        <img
          src="/images/tarot.gif"
          alt="A tarot card with a sun"
        />
        <h1>Navigating the Tarot Finder routes</h1>
      </div>
      <div className="main">
        <Nav />
        <Outlet />
      </div>
    </>
  )
}

export default App
