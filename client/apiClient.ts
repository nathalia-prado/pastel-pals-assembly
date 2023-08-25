import request from 'superagent'
import { mapFullCard, mapMinCard } from '../lib/utils.ts'
import { Card, FullCard, RawCard, Suit } from '../models/types.ts'

const TAROT_URL = 'https://tarot-api-3hv5.onrender.com/api/v1'

// Returns all available cards
async function getAllCards(min = true): Promise<Card[] | FullCard[]> {
  const cards = await getCards(`${TAROT_URL}/cards`)
  if (min) return cards.map((card: RawCard) => mapMinCard(card))
  else return cards.map((card: RawCard) => mapFullCard(card))
}

// Returns a card by suit
async function getCardBySuit(suit: Suit): Promise<Card[]> {
  const cards = await getCards(`${TAROT_URL}/cards/suits/${suit}`)
  return cards.map((card: RawCard) => mapMinCard(card))
}

// Returns all major cards
async function getMajorCards(): Promise<Card[]> {
  const cards = await getCards(`${TAROT_URL}/cards/search?type=major`)
  return cards.map((card: RawCard) => mapMinCard(card))
}

// Returns a card by value
async function getCardByValue(value: string): Promise<FullCard | undefined> {
  const card = (await getCards(`${TAROT_URL}/cards/search?q=${value}`))[0]
  if (!card) return undefined
  return mapFullCard(card)
}

const getCards = async (url: string): Promise<RawCard[]> =>
  JSON.parse((await request.get(url)).text).cards

export { getAllCards, getCardBySuit, getMajorCards, getCardByValue, getCards }
