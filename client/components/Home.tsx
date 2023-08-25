import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Please select a type</p>
      <Link to={'./cards/major'}>Major</Link>
      <Link to={'./cards/minor'}>Minor</Link>
    </div>
  )
}

export default Home
