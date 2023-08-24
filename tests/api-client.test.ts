import { expect, it, describe } from 'vitest'
import data from './fake-data.ts'
import nock from 'nock'
import { getAllCards, getCardBySuit, getCards, getMajorCards } from '../client/apiClient.ts'

const TAROT_URL: string = 'https://tarot-api-3hv5.onrender.com/api/v1'

describe('getCards', () => {
  it('Should return an array of raw data cards', async () => {

    nock(TAROT_URL)
      .get('/cards')
      .reply(200, JSON.stringify(data.allCards))

    const cards = await getCards(`${TAROT_URL}/cards`)
    expect(cards.length).toBe(5)
    expect(cards).toStrictEqual(data.allCards.cards)

  })
})

describe('getAllCards', () => {
  it('Should return all mapped cards', async () => {

    nock(TAROT_URL)
      .get('/cards')
      .reply(200, JSON.stringify(data.allCards))

    const cards = await getAllCards()
    expect(cards.length).toBe(5)
    expect(cards.splice(0, 2)).toMatchInlineSnapshot([
        {
          identifier: 'ar01',
          name: 'The Magician',
          suit: 'major',
          value: '1'
        },
        {
          identifier: 'ar02',
          name: 'The High Priestess',
          suit: 'major',
          value: '2'
        }
      ]
    )

  })
})

describe('getCardsBySuit', () => {
  it('Should return mapped cards by suit', async () => {

    nock(TAROT_URL)
      .get(`/cards/suits/wands`)
      .reply(200, JSON.stringify(data.wandsCards))

    const cards = await getCardBySuit('wands')
    expect(cards.length).toBe(3)
    expect(cards.splice(0, 2)).toMatchInlineSnapshot(
      [
        {
          identifier: 'wapa',
          name: 'Page of Wands',
          suit: 'wands',
          value: 'page'
        },
        {
          identifier: 'wakn',
          name: 'Knight of Wands',
          suit: 'wands',
          value: 'knight'
        }
      ]
    )

  })
})

describe('getMajorCards', () => {
  it('Should return all mapped major cards', async () => {

    nock(TAROT_URL)
      .get(`/cards/search?type=major`)
      .reply(200, JSON.stringify(data.majorCards))

    const cards = await getMajorCards()
    expect(cards.length).toBe(2)
    console.log(cards)
    expect(cards).toMatchInlineSnapshot(
      [
        {
          identifier: 'ar01',
          name: 'The Magician',
          suit: 'major',
          value: '1'
        },
        {
          identifier: 'ar02',
          name: 'The High Priestess',
          suit: 'major',
          value: '2'
        }
      ]
    )

  })
})

describe('getCardByValue', () => {
  it('Should return a single card by value')
  it('Should return the card mapped to contain the full dataset')
  it('Should throw if the queried card does not exist')
})