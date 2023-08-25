import { useState, useEffect } from 'react'
import { FullCard } from '../../models/types'
import { getAllCards } from '../apiClient'

interface FortuneCard {
  upward: boolean
  card: FullCard
}

function FortunesHoseshoe() {
  const [cards, setCards] = useState([] as FullCard[])
  const [pastCard, setPastCard] = useState({} as FortuneCard)
  const [presentCard, setPresentCard] = useState({} as FortuneCard)
  const [hiddenCard, setHiddenCard] = useState({} as FortuneCard)
  const [obstaclesCard, setObstacleCard] = useState({} as FortuneCard)
  const [environmentCard, setEnvironmentCard] = useState({} as FortuneCard)
  const [actionCard, setActionCard] = useState({} as FortuneCard)
  const [outcomeCard, setOutcomeCard] = useState({} as FortuneCard)

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

    const obstaclesIndex = randomCardNumber()
    setObstacleCard({
      upward: randomCardOrientation(),
      card: fortuneCards[obstaclesIndex],
    })
    fortuneCards.splice(obstaclesIndex, 1)

    const outcomeIndex = randomCardNumber()
    setOutcomeCard({
      upward: randomCardOrientation(),
      card: fortuneCards[outcomeIndex],
    })
    fortuneCards.splice(outcomeIndex, 1)

    const actionIndex = randomCardNumber()
    setActionCard({
      upward: randomCardOrientation(),
      card: fortuneCards[actionIndex],
    })
    fortuneCards.splice(actionIndex, 1)

    const environmentIndex = randomCardNumber()
    setEnvironmentCard({
      upward: randomCardOrientation(),
      card: fortuneCards[environmentIndex],
    })
    fortuneCards.splice(environmentIndex, 1)

    const pastIndex = randomCardNumber()
    setPastCard({
      upward: randomCardOrientation(),
      card: fortuneCards[pastIndex],
    })
    fortuneCards.splice(pastIndex, 1)

    const presentIndex = randomCardNumber()
    setPresentCard({
      upward: randomCardOrientation(),
      card: fortuneCards[presentIndex],
    })
    fortuneCards.splice(presentIndex, 1)

    const hiddenIndex = randomCardNumber()
    setHiddenCard({
      upward: randomCardOrientation(),
      card: fortuneCards[hiddenIndex],
    })
  }

  return (
    <>
      <h1>Horseshoe Spread</h1>

      <div className="horseshoe-spread">
        <div className="card-one">
          <h2>Past</h2>
          <p>This card tells you where you've come from</p>

          {pastCard.card && (
            <>
              <img
                alt={pastCard.card.description}
                src={`/tarot-images/${pastCard.card.identifier}.jpg`}
              />
              <div>
                {!pastCard.upward && 'REVERSE '}
                {pastCard.card.name}
              </div>
              <p>
                {pastCard.upward
                  ? pastCard.card.meaningUp
                  : pastCard.card.meaningReverse}
              </p>
            </>
          )}
        </div>
        <div className="card-two">
          <h2>Present</h2>
          <p>This card tells you where you are now</p>
          {presentCard.card && (
            <>
              <img
                alt={presentCard.card.description}
                src={`/tarot-images/${presentCard.card.identifier}.jpg`}
              />
              <div>
                {!presentCard.upward && 'REVERSE '}
                {presentCard.card.name}
              </div>
              <p>
                {presentCard.upward
                  ? presentCard.card.meaningUp
                  : presentCard.card.meaningReverse}
              </p>
            </>
          )}
        </div>
        <div className="card-three">
          <h2>Hidden Influences</h2>
          <p>
            This card tells you something you didn't notice, something under the
            surface that you aren't conscious of, or something you've been told
            that isn't true
          </p>
          {hiddenCard.card && (
            <>
              <img
                alt={hiddenCard.card.description}
                src={`/tarot-images/${hiddenCard.card.identifier}.jpg`}
              />
              <div>
                {!hiddenCard.upward && 'REVERSE '}
                {hiddenCard.card.name}
              </div>
              <p>
                {hiddenCard.upward
                  ? hiddenCard.card.meaningUp
                  : hiddenCard.card.meaningReverse}
              </p>
            </>
          )}
        </div>
        <div className="card-four">
          <h2>Obstacles</h2>
          <p>
            This card shows you things that are in your way and making it hard
            for you to succeed
          </p>
          {obstaclesCard.card && (
            <>
              <img
                alt={obstaclesCard.card.description}
                src={`/tarot-images/${obstaclesCard.card.identifier}.jpg`}
              />
              <div>
                {!obstaclesCard.upward && 'REVERSE '}
                {obstaclesCard.card.name}
              </div>
              <p>
                {obstaclesCard.upward
                  ? obstaclesCard.card.meaningUp
                  : obstaclesCard.card.meaningReverse}
              </p>
            </>
          )}
        </div>
        <div className="card-five">
          <h2>Environment</h2>
          <p>
            This card shows you people or circumstances that influence the
            situation
          </p>
          {environmentCard.card && (
            <>
              <img
                alt={environmentCard.card.description}
                src={`/tarot-images/${environmentCard.card.identifier}.jpg`}
              />
              <div>
                {!environmentCard.upward && 'REVERSE '}
                {environmentCard.card.name}
              </div>
              <p>
                {environmentCard.upward
                  ? environmentCard.card.meaningUp
                  : environmentCard.card.meaningReverse}
              </p>
            </>
          )}
        </div>
        <div className="card-six">
          <h2>Action</h2>
          <p>This card tells you the action you need to take</p>
          {actionCard.card && (
            <>
              <img
                alt={actionCard.card.description}
                src={`/tarot-images/${actionCard.card.identifier}.jpg`}
              />
              <div>
                {!actionCard.upward && 'REVERSE '}
                {actionCard.card.name}
              </div>
              <p>
                {actionCard.upward
                  ? actionCard.card.meaningUp
                  : actionCard.card.meaningReverse}
              </p>
            </>
          )}
        </div>
        <div className="card-seven">
          <h2>Outcome</h2>
          <p>This card tells you the outcome you can expect</p>
          {outcomeCard.card && (
            <>
              <img
                alt={outcomeCard.card.description}
                src={`/tarot-images/${outcomeCard.card.identifier}.jpg`}
              />
              <div>
                {!outcomeCard.upward && 'REVERSE '}
                {outcomeCard.card.name}
              </div>
              <p>
                {outcomeCard.upward
                  ? outcomeCard.card.meaningUp
                  : outcomeCard.card.meaningReverse}
              </p>
            </>
          )}
        </div>
      </div>
      <button onClick={getFortune}>omg get my fortune~</button>
    </>
  )
}

export default FortunesHoseshoe

// ADVICE SPREAD = 3 CARDS (1 = Do this, 2 = Avoid this, 3 = The Attitude you need )
// HORSESHOE SPREAD = 7 CARDS (1 = Past, 2 = Present, 3 = Hidden Influences (something you didn't notice, under the surface, you're not conscious of), 4 = Obstacles (things in your way making it hard for you to succeed), 5 = Environment (people or circumstances that influence the situation), 6 = The Action you need to take, 7 = Outcome )
