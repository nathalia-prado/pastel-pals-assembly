//Should display four clickable buttons to take you to Link to={`/cards/minor/${suit}} ????}
import { Card } from '../../models/types'
import { Link } from 'react-router-dom'

function Minor() {
  return (
    <>
      <Link to={'/cards/minor/swords'}>
        <h2>Swords</h2>
      </Link>
      <Link to={'/cards/minor/cups'}>
        <h2>Cups</h2>
      </Link>
      <Link to={'/cards/minor/wands'}>
        <h2>Wands</h2>
      </Link>
      <Link to={'/cards/minor/coins'}>
        <h2>Coins</h2>
      </Link>
    </>
  )
}

export default Minor
