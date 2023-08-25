import { useState, useEffect } from 'react'
import { FullCard } from '../../models/types'
import { getAllCards } from '../apiClient'

interface FortuneCard {
  upward: boolean
  card: FullCard
}

function Fortunes() {
  const [cards, setCards] = useState([] as FullCard[])
  const [adviceCard, setAdviceCard] = useState({} as FortuneCard)
  const [avoidCard, setAvoidCard] = useState({} as FortuneCard)
  const [attitudeCard, setAttitudeCard] = useState({} as FortuneCard)

  function randomCardNumber() {
    const min = 0
    const max = 78
    return Math.floor(Math.random() * (+max - +min) + +min)
  }

  function randomCardOrientation() {
    return Math.floor(Math.random() * 2) == 0
  }

  // makes more sense to set the cards in state
  // or to get the cards in the use effect
  // and ONLY set in state the cards that want (randomized for fortune)

  useEffect(() => {
    const getCards = async () => {
      try {
        const allCards = await getAllCards(true)
        setCards(allCards as FullCard[])
      } catch (e) {
        console.log("omg it broke~~ I'M A STUB!!!")
      }
    }
    getCards()
  }, [])

  if (!(cards.length > 0)) return <h1>Cards loading...</h1>

  function getFortune() {
    const fortuneCards = [...cards]

    const adviceIndex = randomCardNumber()
    setAdviceCard({
      upward: randomCardOrientation(),
      card: fortuneCards[adviceIndex],
    })
    fortuneCards.splice(adviceIndex, 1)

    const avoidIndex = randomCardNumber()
    setAvoidCard({
      upward: randomCardOrientation(),
      card: fortuneCards[avoidIndex],
    })
    fortuneCards.splice(avoidIndex, 1)

    const attitudeIndex = randomCardNumber()
    setAttitudeCard({
      upward: randomCardOrientation(),
      card: fortuneCards[attitudeIndex],
    })
  }

  /// use effect to get the cards

  // if cards
  // set a card for each
  // {card : cards[randomIndex], upwards:true/false }

  // <div>{card.upwards ? 'UPWARDS' : 'REVERSE'} card {card.name}</div>
  // <div>{card.upwards ? card.upwardsdefiiniton : card.downwarddefinition}</div>

  //card.meaningUp === 0
  //card.meaningRev === 1
  // {upward: true, card: {cardobj}}

  return (
    <>
      <h1>Advice Spread</h1>

      <div className="advice-spread">
        <div className="card-one">
          <h2>Do this</h2>
          <p>This card tells you what you're doing right</p>
          {adviceCard.card && (
            <>
              <div>
                {!adviceCard.upward && 'REVERSE '}
                {adviceCard.card.name}
              </div>
              <p>
                {adviceCard.upward
                  ? adviceCard.card.meaningUp
                  : adviceCard.card.meaningReverse}
              </p>
            </>
          )}
        </div>
        <div className="card-two">
          <h2>Avoid this</h2>
          <p>
            This card tells you what could improve on, or should avoid doing
          </p>
          {avoidCard.card && (
            <>
              <div>
                {!avoidCard.upward && 'REVERSE '}
                {avoidCard.card.name}
              </div>
              <p>
                {avoidCard.upward
                  ? avoidCard.card.meaningUp
                  : avoidCard.card.meaningReverse}
              </p>
            </>
          )}
        </div>
        <div className="card-three">
          <h2>Attitude needed</h2>
          <p>This card tells you what will be needed for success</p>
          {attitudeCard.card && (
            <>
              <div>
                {!attitudeCard.upward && 'REVERSE '}
                {attitudeCard.card.name}
              </div>
              <p>
                {attitudeCard.upward
                  ? attitudeCard.card.meaningUp
                  : attitudeCard.card.meaningReverse}
              </p>
            </>
          )}
        </div>
      </div>
      <button onClick={getFortune}>omg get my fortune~</button>
    </>
  )
}

export default Fortunes

// ADVICE SPREAD = 3 CARDS (1 = Do this, 2 = Avoid this, 3 = The Attitude you need )
// HORSESHOE SPREAD = 7 CARDS (1 = Past, 2 = Present, 3 = Hidden Influences (something you didn't notice, under the surface, you're not conscious of), 4 = Obstacles (things in your way making it hard for you to succeed), 5 = Environment (people or circumstances that influence the situation), 6 = The Action you need to take, 7 = Outcome )
