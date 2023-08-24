import { expect, it, describe } from 'vitest'
import data from './fake-data.ts'
import nock from 'nock'
import { getAllCards, getCardBySuit, getCardByValue, getCards, getMajorCards } from '../client/apiClient.ts'

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
    expect(cards.splice(0, 2)).toStrictEqual([
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
    expect(cards.splice(0, 2)).toStrictEqual(
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
    expect(cards).toStrictEqual(
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
  it('Should return a single mapped card by value', async () => {

    nock(TAROT_URL)
      .get(`/cards/search?value=10`)
      .reply(200, JSON.stringify(data.valueCards))

    const card = await getCardByValue('10')
    expect(card).toStrictEqual(
      {
        type: 'major',
        name: 'Wheel Of Fortune',
        suit: 'major',
        value: '10',
        meaningUp: 'Destiny, fortune, success, elevation, luck, felicity.',
        meaningReverse: 'Increase, abundance, superfluity.',
        identifier: 'ar10',
        description: 'In this symbol I have again followed the reconstruction of Éliphas Lévi, who has furnished several variants. It is legitimate--as I have intimated--to use Egyptian symbolism when this serves our purpose, provided that no theory of origin is implied therein. I have, however, presented Typhon in his serpent form. The symbolism is, of course, not exclusively Egyptian, as the four Living Creatures of Ezekiel occupy the angles of the card, and the wheel itself follows other indications of Lévi in respect of Ezekiel\'s vision, as illustrative of the particular Tarot Key. With the French occultist, and in the design itself, the symbolic picture stands for the perpetual motion of a fluidic universe and for the flux of human life. The Sphinx is the equilibrium therein. The transliteration of Taro as Rota is inscribed on the wheel, counterchanged with the letters of the Divine Name--to shew that Providence is imphed through all. But this is the Divine intention within, and the similar intention without is exemplified by the four Living Creatures. Sometimes the sphinx is represented couchant on a pedestal above, which defrauds the symbolism by stultifying the essential idea of stability amidst movement.\n' +
          'Behind the general notion expressed in the symbol there lies the denial of chance and the fatality which is implied therein. It may be added that, from the days of Lévi onward, the occult explanations of this card are--even for occultism itself--of a singularly fatuous kind. It has been said to mean principle, fecundity, virile honour, ruling authority, etc. The findings of common fortune-telling are better than this on their own plane.'
      })
  })

  it('Should return undefined if the queried card does not exist', async () => {

    nock(TAROT_URL)
      .get(`/cards/search?value=abcde`)
      .reply(200, JSON.stringify({
        "nhits": 0,
        "cards": []
      }))

    const card = await getCardByValue('abcde')
    expect(card).toBeUndefined()
  })
})