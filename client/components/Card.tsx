import { Link } from 'react-router-dom'

function Card() {
  return (
    <>
      <Link to={'/cards/:type/:suit'}>
        <h2>Hello world!</h2>
      </Link>
    </>
  )
}

export default Card

//card{
//     name: The magician
//     type: major
//     suit: major
// }

//card{
//     name: The 10 of Wands
//     type: Minor
//     suit: wands
// }

// /cards/:type/:id

{
  /* <Link to={${cards.type}/${cards.suit}`}>{cards.suit}</Link> */
}
//variable       variable
//major/         /major          Major

//minor          //wands         wands

// single card read-out

//    <Link to={`/continents/${country.name}/${country.code}`}>{country.name}</Link>

{
  /* <Link to={${cards.type}/${cards.suit}/${cards.identifier}`}>{cards.name}</Link> */
}
//major/         /major         mag             the magicians
