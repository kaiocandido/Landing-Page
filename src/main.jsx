import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './assets/Styles/GlobalStyles'
import Home from './assets/Containers/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <GlobalStyles/>
   <Home/>
  </StrictMode>,
)
