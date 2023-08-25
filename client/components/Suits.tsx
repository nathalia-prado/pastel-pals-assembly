import { useState, useEffect } from 'react'
import { Card } from '../../models/types'
import { getCardBySuit } from '../apiClient'
import { Link, useParams } from 'react-router-dom'

export default function Suit() {
  const { suit } = useParams()
  const [cards, setCards] = useState([] as Card[])

  useEffect(() => {
    const getCards = async () => {
      try {
        if (
          suit === 'wands' ||
          suit === 'cups' ||
          suit === 'pentacles' ||
          suit === 'swords'
        ) {
          const suitCards = await getCardBySuit(suit)
          setCards(suitCards)
        }
      } catch (e) {
        console.log("omg it broke~~ I'M A STUB!!!")
      }
    }
    getCards()
  }, [])

  if (!cards.length) return <h1>INVALID SUIT</h1>

  // todo replace stubs for card preview component
  const cardLinks = cards?.map((card) => (
    <li key={`major-${card.identifier}`}>
      <Link to={`./${card.identifier}`}>{card.name}</Link>
    </li>
  ))

  return (
    <>
      <h2>{suit} Cards</h2>
      <ol>{cardLinks}</ol>s
    </>
  )
}
