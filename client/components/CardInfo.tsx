import { useEffect, useState } from 'react'
import { FullCard as FullCardType } from '../../models/types'
import { getCardByValue } from '../apiClient'
import { useParams } from 'react-router-dom'

export default function CardInfo() {
  const [card, setCard] = useState<FullCardType | undefined>(undefined)
  const params = useParams()

  useEffect(() => {
    async function fetchCard() {
      const cardData = await getCardByValue(params.card || '')
      setCard(cardData)
    }

    try {
      fetchCard()
    } catch (error) {
      console.log(error)
    }
  }, [])

  console.log(params.card)
  // prevent showing invalid cards
  if (!card) {
    return null
  }

  return (
    <div>
      <h2>
        <b>{card.name}</b>
      </h2>
      <p>
        <b>Type: </b>
        {card.type}
      </p>
      <p>
        <b>Meaning Up: </b>
        {card.meaningUp}
      </p>
      <p>
        <b>Meaning Reverse: </b>
        {card.meaningReverse}
      </p>
      <p>
        <b>Description: </b>
        {card.description}
      </p>
    </div>
  )
}
