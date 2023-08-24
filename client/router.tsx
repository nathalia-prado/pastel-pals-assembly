import {
    createBrowserRouter,
    createRoutesFromElements,
    Route, 
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import Card from './components/Card'

export const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/cards/:name" element={<Card />} />      
    </Route>
    )
  )