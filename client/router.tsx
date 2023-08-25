import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import Card from './components/Card'
import Major from './components/Major'
import Minor from './components/Minor'
import Suits from './components/Suits'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      {/* <Route path="/fortunes" element={<Fortunes />} />
      <Route path="/fortunes/:fortunetype" element={<FortunesTypes />} /> */}
      <Route path="/cards/major" element={<Major />} />
      <Route path="/cards/major/:card" element={<Card />} />
      <Route path="/cards/minor" element={<Minor />} />
      <Route path="/cards/minor/:suit" element={<Suits />} />
      <Route path="/cards/minor/:suit/:card" element={<Card />} />
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

// <Route path={'/major'} element={<Major/>>
//   <Route path={'/:type'} element={<Suit/>>
//     <Route path={'/:card'} element={<Card/>/>
//   </Route>
// </Route>
// <Route path={'/minor'} element={<Minor/>>
//     <Route path={'/:card'} element={<Card/>/>
// </Route>
