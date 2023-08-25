import { useState, useEffect } from 'react'
import { Card } from '../../models/types'
import { getMajorCards } from '../apiClient'
import { Link } from 'react-router-dom'

export default function Major() {
  const [cards, setCards] = useState([] as Card[])

  useEffect(() => {
    const getCards = async () => {
      try {
        const majorCards = await getMajorCards()
        setCards(majorCards)
      } catch (e) {
        console.log("omg it broke~~ I'M A STUB!!!")
      }
    }
    getCards()
  }, [])

  // todo replace stubs for card preview component
  const cardLinks = cards.map((card) => (
    <li key={`major-${card.identifier}`}>
      <Link to={`./${card.identifier}`}>{card.name}</Link>
    </li>
  ))

  return (
    <>
      <h2>MAJOR CARDS</h2>
      <ol>{cardLinks}</ol>
    </>
  )
}
