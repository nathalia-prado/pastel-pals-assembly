import { Link } from "react-router-dom"

function Nav() {
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        <li><Link to={`cards/test`}>TEST</Link> </li>
      </ul>
    </div>
  )
}

export default Nav

