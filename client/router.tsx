import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import Card from './components/Card'
import CardInfo from './components/CardInfo'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/cards/:type" element={<Card />} />
      <Route path="/cards/:type/:suit" element={<Card />} />
      <Route path="/card/:value" element={<CardInfo />} />
    </Route>
  )
)
// /cards/:type //

// /cards/major/major - display 22 major cards

// cards/:type/:suit //

// cards/minor/wands - display all wands cards
// cards/minor/cups - display all cups cards
// cards/minor/swords - display all swords cards
// cards/minor/coin - display all coin cards

// STRETCH ------  /cards/:type/:suit/:identifier  ----- STRETCH //
