import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Please select a type</p>
      <Link to={'./cards/major'}>
        <h1>Major</h1>
      </Link>
      <Link to={'./cards/minor'}>
        <h1>Minor</h1>
      </Link>
      <Link to={'./fortunes'}>
        <h1>Fortunes</h1>
      </Link>
    </div>
  )
}

export default Home
