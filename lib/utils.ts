import { Card, FullCard, RawCard } from '../models/types.ts'

const mapFullCard = (card: RawCard): FullCard => {
  const { type, name, suit, value } = card
  return {
    type, name, suit: (suit ? suit : 'major'), value,
    meaningUp: card.meaning_up, meaningReverse: card.meaning_rev,
    identifier: card.name_short, description: card.desc
  }
}

const mapMinCard = (card: RawCard): Card => {
  const { identifier, name, suit, description, value } = mapFullCard(card)
  return { identifier, name, suit, description, value }
}

export { mapFullCard, mapMinCard }